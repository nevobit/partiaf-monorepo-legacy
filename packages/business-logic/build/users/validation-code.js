"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validationCode = void 0;
const constant_definitions_1 = require("@partiaf/constant-definitions");
const types_1 = require("@partiaf/types");
const validationCode = async (uuid, code) => {
    const model = await (0, constant_definitions_1.getModel)(constant_definitions_1.Collection.USERS, types_1.UserSchemaMongo);
    const user = await model.findOne({ uuid: uuid });
    if (user) {
        if (user.verification_code == code) {
            return "801";
        }
        else {
            throw new Error("909");
        }
    }
    else {
        throw new Error("Usuario no encontrado");
    }
};
exports.validationCode = validationCode;
//# sourceMappingURL=validation-code.js.map