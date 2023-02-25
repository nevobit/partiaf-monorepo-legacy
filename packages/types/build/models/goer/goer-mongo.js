"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GoerSchemaMongo = void 0;
const mongoose_1 = require("mongoose");
exports.GoerSchemaMongo = new mongoose_1.Schema({
    uuid: { type: String, unique: true },
    user: { type: String },
    status: { type: String },
    cost: { type: Number },
    time: { type: String },
    cover: { type: String },
    amount: { type: Number },
    image: { type: String },
    name: { type: String },
    description: { type: String },
    date: { type: String },
}, {
    versionKey: false,
    timestamps: true
});
//# sourceMappingURL=goer-mongo.js.map