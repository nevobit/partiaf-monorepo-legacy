"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStoreByAdmin = void 0;
const constant_definitions_1 = require("@partiaf/constant-definitions");
const types_1 = require("@partiaf/types");
const getStoreByAdmin = async (admin_uuid) => {
    const model = await (0, constant_definitions_1.getModel)(constant_definitions_1.Collection.STORES, types_1.StoreSchemaMongo);
    const store = await model.findOne({ admin: admin_uuid });
    return store;
};
exports.getStoreByAdmin = getStoreByAdmin;
//# sourceMappingURL=get-by-admin.js.map