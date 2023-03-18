"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStoreById = void 0;
const constant_definitions_1 = require("@partiaf/constant-definitions");
const types_1 = require("@partiaf/types");
const getStoreById = async (uuid) => {
    const model = await (0, constant_definitions_1.getModel)(constant_definitions_1.Collection.STORES, types_1.StoreSchemaMongo);
    const store = await model.findOne({ uuid: uuid });
    return store;
};
exports.getStoreById = getStoreById;
//# sourceMappingURL=get-one.js.map