import { Collection, getModel } from "@partiaf/constant-definitions";
import { Store, StoreSchemaMongo } from "@partiaf/types";

export const getAllStores = async (): Promise<Store[]> => {
    const model = await getModel(Collection.STORES, StoreSchemaMongo)
    const stores = await model.find() as Store[];
    return stores;
}