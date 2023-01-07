"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateStore = void 0;
const constant_definitions_1 = require("@partiaf/constant-definitions");
const types_1 = require("@partiaf/types");
const updateStore = async (uuid, data) => {
    const model = await (0, constant_definitions_1.getModel)(constant_definitions_1.Collection.STORES, types_1.StoreSchemaMongo);
    const store = await model.findOne({ uuid: data.uuid });
    if (!store) {
        throw new Error("602");
    }
    ;
    const dataToUpdate = { ...data };
    await store.update(dataToUpdate);
    return { ...store.doc };
};
exports.updateStore = updateStore;
//# sourceMappingURL=update.js.map