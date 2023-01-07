import { Collection, getModel } from "@partiaf/constant-definitions";
import { Cover, CoverSchemaMongo } from "@partiaf/types";

export const getCoverById = async (uuid:string): Promise<Cover> => {
    const model = await getModel(Collection.COVERS, CoverSchemaMongo)
    const cover = await model.findOne({uuid: uuid}) as Cover;
    
    return cover;
}