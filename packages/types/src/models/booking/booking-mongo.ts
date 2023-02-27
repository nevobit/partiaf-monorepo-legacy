import { Schema } from "mongoose";
import { Booking } from "./booking";

export const BookingSchemaMongo = new Schema<Booking>({
    uuid: {type: String, unique: true},
    status: {type: String},
    time: {type:String},
    name: {type:String},
    store: {type: String},
    consumption: {type: String},
    chairs: {type: Number},
    table: {type: Number},
    tables: {type: Number},
    date: {type: String},
    user: {type: String},
}, {
    versionKey: false,
    timestamps: true
})