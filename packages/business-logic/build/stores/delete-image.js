"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteImageStore = void 0;
const constant_definitions_1 = require("@partiaf/constant-definitions");
const types_1 = require("@partiaf/types");
const deleteImageStore = async (data) => {
    console.log("EN LA LOGICA DE NEGOCIOS XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX", data.url, data.uuid);
    const model = await (0, constant_definitions_1.getModel)(constant_definitions_1.Collection.STORES, types_1.StoreSchemaMongo);
    const store = await model.findOne({ uuid: data.uuid });
    if (!store) {
        throw new Error("602");
    }
    const index = store.photos.indexOf(data.url);
    if (index >= 0) {
        store.photos.splice(index, 1);
        await store.save();
    }
    return true;
};
exports.deleteImageStore = deleteImageStore;
//# sourceMappingURL=delete-image.js.map