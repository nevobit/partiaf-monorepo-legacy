"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAdminById = void 0;
const constant_definitions_1 = require("@partiaf/constant-definitions");
const types_1 = require("@partiaf/types");
const getAdminById = async (uuid) => {
    const model = await (0, constant_definitions_1.getModel)(constant_definitions_1.Collection.ADMINS, types_1.AdminSchemaMongo);
    const obj = (await model.find({ uuid: uuid }));
    return obj;
};
exports.getAdminById = getAdminById;
//# sourceMappingURL=get-by-id.js.map