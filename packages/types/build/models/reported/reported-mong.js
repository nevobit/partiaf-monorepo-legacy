"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReportedSchemaMongo = void 0;
const mongoose_1 = require("mongoose");
exports.ReportedSchemaMongo = new mongoose_1.Schema({
    uuid: { type: String, unique: true },
    user: { type: String },
    store: { type: String },
    reason: { type: String }
}, {
    versionKey: false,
    timestamps: true
});
//# sourceMappingURL=reported-mong.js.map