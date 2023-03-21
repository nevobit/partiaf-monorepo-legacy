"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOneStoreById = void 0;
const constant_definitions_1 = require("@partiaf/constant-definitions");
const types_1 = require("@partiaf/types");
const getOneStoreById = async (uuid) => {
    const model = await (0, constant_definitions_1.getModel)(constant_definitions_1.Collection.STORES, types_1.StoreSchemaMongo);
    const store = await model.findOne({ uuid: uuid });
    return store;
};
exports.getOneStoreById = getOneStoreById;
//# sourceMappingURL=get-one.js.map