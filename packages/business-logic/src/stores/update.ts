import { Collection, getModel } from "@partiaf/constant-definitions";
import {Store, StoreSchemaMongo } from "@partiaf/types";

type PartialStore = Partial<Store>;

export const updateStore = async(uuid: string, data: PartialStore): Promise<Store | Error> => {
    const model = await getModel(Collection.STORES, StoreSchemaMongo);
    const store = await model.findOne({uuid: data.uuid});

    if(!store) { throw new Error("602")};
    
    const dataToUpdate = {...data};

    await store.update(dataToUpdate);
    
    return {...store.doc};
}  