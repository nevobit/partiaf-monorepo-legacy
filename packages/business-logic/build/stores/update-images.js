"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateStorePhotos = void 0;
const constant_definitions_1 = require("@partiaf/constant-definitions");
const types_1 = require("@partiaf/types");
const updateStorePhotos = async (uuid, newPhotos) => {
    const model = await (0, constant_definitions_1.getModel)(constant_definitions_1.Collection.STORES, types_1.StoreSchemaMongo);
    const store = await model.findOne({ uuid });
    if (!store) {
        throw new Error("602");
    }
    store.photos = newPhotos;
    await store.save();
    return true;
};
exports.updateStorePhotos = updateStorePhotos;
//# sourceMappingURL=update-images.js.map