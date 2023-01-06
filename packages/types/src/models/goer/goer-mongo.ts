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
}, {
    versionKey: false,
    timestamps: true
})