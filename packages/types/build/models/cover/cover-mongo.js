"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoverSchemaMongo = void 0;
const mongoose_1 = require("mongoose");
exports.CoverSchemaMongo = new mongoose_1.Schema({
    uuid: { type: String, unique: true },
    name: { type: String },
    description: { type: String },
    type: { type: String },
    limit: { type: Number },
    initial_limit: { type: Number },
    image: { type: String },
    store: { type: String },
    hour: { type: String },
    price: { type: Number },
    date: { type: Date },
    status: { type: Boolean }
}, {
    versionKey: false,
    timestamps: true
});
//# sourceMappingURL=cover-mongo.js.map