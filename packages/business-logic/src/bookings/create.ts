import { Collection, getModel } from "@partiaf/constant-definitions";
import { BookingSchemaMongo, Store, StoreSchemaMongo } from "@partiaf/types";
import { v4 as UUID } from 'uuid';


export const createBooking = async (data: any): Promise<any | null> => {
    const model = getModel(Collection.BOOKINGS, BookingSchemaMongo);
    const modelStore = getModel(Collection.STORES, StoreSchemaMongo);
    
    const uuid = UUID();
    const store = await modelStore.findOne({uuid: data.store})
    if(!store) return new Error("Store not found");
    
    const bookings = await model.find({});
    
    const tables = data.chairs > store.chairs_per_table? Math.ceil(data.chairs / store?.max_per_table)  : 1; 
    const table = bookings.length + 1;
    const result = new model({...data, uuid, table, tables});
    
    if (!result) throw new Error("No se puede crear la reserva");

    await result.save();

    return result;
}