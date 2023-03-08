import { Collection, getModel } from "@partiaf/constant-definitions";
import { BookingSchemaMongo } from "@partiaf/types";

export const deleteBooking = async(uuid:String): Promise<Boolean | Error> => {
    const model = await getModel(Collection.BOOKINGS, BookingSchemaMongo);
    const booking = await model.findOne({uuid:uuid});

    if(!booking) { throw new Error("602")};
    
    await booking.remove();
    
    return true;
}    