import { Schema } from "mongoose";
import { Goer } from "./goer";

export const GoerSchemaMongo = new Schema<Goer>({
    uuid: {type: String, unique: true},
    user: {type: String},
    status: {type: String},
    cost: {type: Number},
    time: {type:String},
    cover: {type: String},
    amount: {type: Number},
    image: {type: String},
    name: {type: String},
    description: {type: String},
    date: {type: String},
     
}, {
    versionKey: false,
    timestamps: true
})

GoerSchemaMongo.virtual('coverDetails', {
    ref: 'covers',
    localField: 'covers',
    foreignField: 'cover'
})