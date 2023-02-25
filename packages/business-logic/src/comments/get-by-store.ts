import { Collection, getModel } from "@partiaf/constant-definitions";
import { CommentSchemaMongo } from "@partiaf/types";

export const getCommentsByStore = async (uuid:string): Promise<any> => {
    const model = await getModel(Collection.COMMENTS, CommentSchemaMongo)

    const comments = await model.find({store: uuid});
    const newComments = comments.reverse();

    return newComments;
}