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
    status: {type: Boolean, default: false},
    address: {type: String},
    password: {type: String, min: 5},
    photo: {type: String, default: ""},
    verification_code: {type: Number, default: 0},
    last_login: {type: Date, default: Date.now()}
}, {
    versionKey: false,
    timestamps: true
})