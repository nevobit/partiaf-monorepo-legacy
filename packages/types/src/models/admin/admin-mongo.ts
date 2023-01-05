import mongoose, { Schema } from "mongoose";
import { Admin } from "./admin";


export const AdminSchemaMongo = new Schema<Admin>({
    name: {type: String},
}, {
    versionKey: false,
    timestamps: true
})