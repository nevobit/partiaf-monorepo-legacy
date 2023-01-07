import { Collection, getModel } from "@partiaf/constant-definitions";
import { Cover, CoverSchemaMongo } from "@partiaf/types";

export const getAllCovers = async (): Promise<any> => {
    const model = await getModel(Collection.COVERS, CoverSchemaMongo)
    const covers = await model.find({}) as Cover[];
    return covers;
}