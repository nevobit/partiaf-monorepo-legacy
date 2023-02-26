"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentSchemaMongo = void 0;
const mongoose_1 = require("mongoose");
exports.CommentSchemaMongo = new mongoose_1.Schema({
    uuid: { type: String, required: true, unique: true },
    text: { type: String },
    photo: { type: String },
    store: { type: String },
    user: { type: String }
}, {
    versionKey: false,
    timestamps: true
});
//# sourceMappingURL=comment-mongo.js.map