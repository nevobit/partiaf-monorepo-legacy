import { Collection, getModel } from "@partiaf/constant-definitions";
import { CommentSchemaMongo } from "@partiaf/types";
import { v4 as UUID } from 'uuid';


export const createComment = async (data: any): Promise<any | null> => {
    const model = getModel(Collection.COMMENTS, CommentSchemaMongo);

    const uuid = UUID();
    const result = new model({...data, uuid});

    if (!result) throw new Error("No se puede crear el comentario");

    await result.save();

    return result;
}