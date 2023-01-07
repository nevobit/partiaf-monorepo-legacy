import { Collection, getModel } from "@partiaf/constant-definitions";
import { StoreSchemaMongo } from "@partiaf/types";

export const getStoreById = async (uuid:string): Promise<any> => {
    const model = await getModel(Collection.STORES, StoreSchemaMongo)
    const store = await model.findOne({uuid: uuid});

    return store;
}