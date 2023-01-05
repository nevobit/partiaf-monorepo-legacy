"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoreSchemaMongo = void 0;
const tslib_1 = require("tslib");
const mongoose_1 = tslib_1.__importStar(require("mongoose"));
exports.StoreSchemaMongo = new mongoose_1.Schema({
    name: { type: String },
    description: { type: String },
    type: { type: String },
    nit: { type: String, unique: true },
    email: { type: String, unique: true },
    password: { type: String },
    phone: { type: Number },
    location: [{
            address: [{
                    street: String,
                    city: String,
                    state: String,
                    zipcode: String
                }],
            geo: [
                {
                    caract: String,
                    longitud: String,
                    latitud: String
                }
            ]
        }],
    limit: { type: Number },
    photos: [{ type: String }],
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
    admin: { type: mongoose_1.default.Types.ObjectId, ref: 'admin' }
});
//# sourceMappingURL=store-mongo.js.map