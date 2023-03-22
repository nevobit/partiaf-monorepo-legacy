import { Collection, getModel } from "@partiaf/constant-definitions";
import { Cover, CoverSchemaMongo } from "@partiaf/types";

export const getCoversById = async (uuid:string): Promise<Cover[]> => {
    const model = await getModel(Collection.COVERS, CoverSchemaMongo)
    const covers = await model.find({store: uuid}) as Cover[];
    const activeCovers = covers.filter((cover:Cover) => cover.status != "deleted");
    return activeCovers;
}