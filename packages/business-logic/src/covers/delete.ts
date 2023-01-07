import { Collection, getModel } from "@partiaf/constant-definitions";
import { CoverSchemaMongo } from "@partiaf/types";

export const deleteCover = async(uuid:String): Promise<Boolean | Error> => {
    const model = await getModel(Collection.COVERS, CoverSchemaMongo);
    const cover = await model.findOne({uuid:uuid});

    if(!cover) { throw new Error("602")};
    
    await cover.remove();
    
    return true;
}    