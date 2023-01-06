"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminSchemaMongo = void 0;
const mongoose_1 = require("mongoose");
exports.AdminSchemaMongo = new mongoose_1.Schema({
    uuid: { type: String, unique: true },
    name: { type: String },
    lastname: { type: String },
    email: { type: String, unique: true, required: true },
    identification_type: { type: String },
    identification: { type: Number, unique: true },
    age: { type: Number },
    phone: { type: Number, unique: true },
    birthdate: { type: String },
    gender: { type: String },
    address: { type: String },
    password: { type: String, min: 5 },
    photo: { type: String },
}, {
    versionKey: false,
    timestamps: true
});
//# sourceMappingURL=admin-mongo.js.map