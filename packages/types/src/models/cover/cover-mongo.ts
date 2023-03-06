import { Schema } from "mongoose";
import { Cover } from "./cover";


export const CoverSchemaMongo = new Schema<Cover>({
    uuid: {type: String, unique: true},
    name: {type: String},
    description: {type: String},
    type: {type: String},
    limit: {type:Number},
    initial_limit: {type:Number},
    image: {type: String}, 
    store: {type: String},
    hour: {type: String},
    price: {type: Number},
    date: {type: String},
    status: {type: Boolean},
    location: { type: { lat: Number, lng: Number } }
}, {
    versionKey: false,
    timestamps: true
})