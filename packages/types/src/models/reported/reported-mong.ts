import { Schema } from "mongoose";
import { Reported } from "./reported";

export const ReportedSchemaMongo = new Schema<Reported>({
    uuid: {type: String, unique: true},
    user: {type: String},
    store: {type: String},
    reason: {type: String}
}, {
    versionKey: false,
    timestamps: true
});