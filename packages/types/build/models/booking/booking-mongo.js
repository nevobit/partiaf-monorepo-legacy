"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingSchemaMongo = void 0;
const mongoose_1 = require("mongoose");
exports.BookingSchemaMongo = new mongoose_1.Schema({
    uuid: { type: String, unique: true },
    status: { type: String },
    time: { type: String },
    name: { type: String },
    store: { type: String },
    consumption: { type: String },
    chairs: { type: Number },
    table: { type: Number },
    tables: { type: Number },
    date: { type: String },
    user: { type: String },
}, {
    versionKey: false,
    timestamps: true
});
//# sourceMappingURL=booking-mongo.js.map