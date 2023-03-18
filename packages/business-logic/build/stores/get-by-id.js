"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStoresById = void 0;
const constant_definitions_1 = require("@partiaf/constant-definitions");
const types_1 = require("@partiaf/types");
const getStoresById = async (uuid) => {
    const model = await (0, constant_definitions_1.getModel)(constant_definitions_1.Collection.STORES, types_1.StoreSchemaMongo);
    const stores = await model.find({ admin: uuid });
    return stores;
};
exports.getStoresById = getStoresById;
//# sourceMappingURL=get-by-id.js.map