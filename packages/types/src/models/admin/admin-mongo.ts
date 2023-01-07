import { Schema } from "mongoose";
import { Admin } from "./admin";

export const AdminSchemaMongo = new Schema<Admin>({
    uuid: {type: String, unique:true},
    name: {type: String},
    lastname: {type: String},
    email: {type: String, unique:true, required: true},
    identification_type: {type: String},
    identification: {type: Number, unique:true},
    age: {type: Number},
    phone: {type: Number, unique:true},
    birthdate: {type: String},
    gender: {type: String},
    address: {type: String},
    password: {type: String, min: 5},
    photo: {type: String},
    verification_code: {type: Number},
    last_login: {type: Date}
}, {
    versionKey: false,
    timestamps: true
})