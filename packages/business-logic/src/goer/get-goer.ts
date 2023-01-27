import { Collection, getModel } from "@partiaf/constant-definitions";
import { Goer, GoerSchemaMongo } from "@partiaf/types";

export const getGoersById = async (uuid:string): Promise<Goer[]> => {
    const model = await getModel(Collection.GOERS, GoerSchemaMongo)
    const goers = await model.find({cover: uuid}) as Goer[];
    return goers;
}