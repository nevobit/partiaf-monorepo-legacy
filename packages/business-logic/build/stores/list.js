"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllStores = void 0;
const constant_definitions_1 = require("@partiaf/constant-definitions");
const types_1 = require("@partiaf/types");
const getAllStores = async () => {
    const model = await (0, constant_definitions_1.getModel)(constant_definitions_1.Collection.STORES, types_1.StoreSchemaMongo);
    const stores = await model.find();
    return stores;
};
exports.getAllStores = getAllStores;
//# sourceMappingURL=list.js.map