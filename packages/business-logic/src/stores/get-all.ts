import { Collection, getModel } from "@partiaf/constant-definitions";
import { StoreSchemaMongo } from "@partiaf/types";

export const getStoresById = async (admin:string): Promise<any> => {
    const model = await getModel(Collection.STORES, StoreSchemaMongo)
    const stores = await model.find({admin: admin});
    return stores;
}