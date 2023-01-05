"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoverSchemaMongo = void 0;
const tslib_1 = require("tslib");
const mongoose_1 = tslib_1.__importStar(require("mongoose"));
exports.CoverSchemaMongo = new mongoose_1.Schema({
    name: { type: String },
    description: { type: String },
    type: { type: String },
    limit: { type: Number },
    initial_limit: { type: Number },
    image: [{ type: String }],
    store: { type: mongoose_1.default.Types.ObjectId, ref: 'store' },
    hour: { type: String },
    price: { type: Number },
    peoples: [
        {
            id: { type: mongoose_1.default.Types.ObjectId, ref: 'cover' },
            amount: { type: Number },
            user: { type: mongoose_1.default.Types.ObjectId, ref: 'user' },
            state: { type: String },
            price: { type: Number },
            gender: { type: String },
            name: { type: String },
            hour: { type: String },
            photo: { type: String },
        }
    ],
    date: { type: Date },
}, {
    versionKey: false,
    timestamps: true
});
//# sourceMappingURL=cover-mongo.js.map