"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllAdmins = void 0;
const constant_definitions_1 = require("@partiaf/constant-definitions");
const types_1 = require("@partiaf/types");
const getAllAdmins = async () => {
    const model = await (0, constant_definitions_1.getModel)(constant_definitions_1.Collection.ADMINS, types_1.AdminSchemaMongo);
    const admins = await model.find();
    return admins;
};
exports.getAllAdmins = getAllAdmins;
//# sourceMappingURL=list.js.map