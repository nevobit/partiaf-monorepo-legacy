import { Schema } from "mongoose";
import { Comment } from "./comment";

export const CommentSchemaMongo = new Schema<Comment>({
    text: {type: String},
    photo: {type: String},
    store: {type: String},
    user: {type: String}
}, {
    versionKey: false,
    timestamps: true
})