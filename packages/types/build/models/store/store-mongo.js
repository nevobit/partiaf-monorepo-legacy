"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoreSchemaMongo = void 0;
const mongoose_1 = require("mongoose");
exports.StoreSchemaMongo = new mongoose_1.Schema({
    uuid: { type: String, unique: true },
    name: { type: String },
    description: { type: String },
    type: { type: String },
    nit: { type: String, unique: true },
    email: { type: String, unique: true },
    password: { type: String, min: 5 },
    phone: { type: Number, unique: true },
    location: {
        address: {
            street: String,
            city: String,
            state: String,
            zipcode: String
        },
        geo: {
            caract: String,
            longitud: String,
            latitud: String
        }
    },
    limit: { type: Number },
    photos: { type: [String] },
    employes: { type: String },
    status: { type: String, default: "inactive" },
    last_login: { type: Date, default: Date.now() },
    balance: { type: Number, default: 0 },
    website: { type: String },
    facebook: { type: String },
    instagram: { type: String },
    tiktok: { type: String },
    youtube: { type: String },
    rating: { type: Number },
    employe_code: { type: Number },
    admin: { type: String }
});
//# sourceMappingURL=store-mongo.js.map