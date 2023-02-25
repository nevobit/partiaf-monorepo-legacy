"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FollowStoreSchemaMongo = void 0;
const mongoose_1 = require("mongoose");
exports.FollowStoreSchemaMongo = new mongoose_1.Schema({
    user: { type: String },
    follow: { type: String },
}, {
    versionKey: false,
    timestamps: true,
});
//# sourceMappingURL=follow-store-mongo.js.map