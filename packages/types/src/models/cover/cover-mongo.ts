import mongoose, { Schema } from "mongoose";
import { Cover } from "./cover";


export const CoverSchemaMongo = new Schema<Cover>({
    name: {type: String},
    description: {type: String},
    type: {type: String},
    limit: {type:Number},
    initial_limit: {type:Number},
    image: [{type: String}], 
    store: {type: mongoose.Types.ObjectId, ref: 'store'},
    hour: {type: String},
    price: {type: Number},
    peoples: [
        {
        id: {type: mongoose.Types.ObjectId, ref: 'cover'},
        amount: {type: Number},
        user: {type: mongoose.Types.ObjectId, ref: 'user'},
        state: {type: String},
        price: {type: Number},
        gender: {type: String},
        name: {type: String},
        hour: {type: String},
        photo: {type: String},
    }
    ],
    date: {type: Date},
}, {
    versionKey: false,
    timestamps: true
})