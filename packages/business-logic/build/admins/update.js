"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateAdmin = void 0;
const constant_definitions_1 = require("@partiaf/constant-definitions");
const types_1 = require("@partiaf/types");
const updateAdmin = async (uuid, data) => {
    const model = await (0, constant_definitions_1.getModel)(constant_definitions_1.Collection.ADMINS, types_1.AdminSchemaMongo);
    const admin = await model.findOne({ uuid: data.uuid });
    if (!admin) {
        throw new Error("602");
    }
    ;
    const dataToUpdate = { ...data };
    await admin.update(dataToUpdate);
    return { ...admin.doc };
};
exports.updateAdmin = updateAdmin;
//# sourceMappingURL=update.js.map