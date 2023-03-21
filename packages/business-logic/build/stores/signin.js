"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.storeSignin = void 0;
const tslib_1 = require("tslib");
const constant_definitions_1 = require("@partiaf/constant-definitions");
const types_1 = require("@partiaf/types");
const bcrypt_1 = tslib_1.__importDefault(require("bcrypt"));
const jsonwebtoken_1 = tslib_1.__importDefault(require("jsonwebtoken"));
const storeSignin = async (uuid, password) => {
    const model = await (0, constant_definitions_1.getModel)(constant_definitions_1.Collection.STORES, types_1.StoreSchemaMongo);
    const store = await model.findOne({ uuid: uuid });
    if (!store) {
        return new Error("Negicio no existe o esta inactivo");
    }
    const match = await bcrypt_1.default.compare(password, store.password);
    if (!match) {
        return new Error("Contraseña incorrecta");
    }
    const token = jsonwebtoken_1.default.sign({ uuid: store.uuid }, process.env.JWT_SECRET_KEY || "", {});
    return {
        token,
        ...store._doc
    };
};
exports.storeSignin = storeSignin;
//# sourceMappingURL=signin.js.map