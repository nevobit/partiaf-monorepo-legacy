import { Collection, getModel } from "@partiaf/constant-definitions";
import { Goer, GoerSchemaMongo } from "@partiaf/types";

export const getGoersByUser = async (uuid:string): Promise<Goer[]> => {
    const model = await getModel(Collection.GOERS, GoerSchemaMongo)
    const goers = await model.find({user: uuid}) as Goer[];
    const goer = await model.findOne({user: uuid}).populate("cover") ;

    console.log({goer})
    return goers;
}