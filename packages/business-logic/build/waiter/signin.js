"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.waiterSignin = void 0;
const tslib_1 = require("tslib");
const constant_definitions_1 = require("@partiaf/constant-definitions");
const types_1 = require("@partiaf/types");
const jsonwebtoken_1 = tslib_1.__importDefault(require("jsonwebtoken"));
const waiterSignin = async ({ username, code }) => {
    const model = await (0, constant_definitions_1.getModel)(constant_definitions_1.Collection.WAITERS, types_1.WaiterSchemaMongo);
    const modelStore = await (0, constant_definitions_1.getModel)(constant_definitions_1.Collection.STORES, types_1.StoreSchemaMongo);
    const waiter = await model.findOne({ username: username });
    if (!waiter) {
        return new Error("Colaborador no existe o esta inactivo");
    }
    const store = await modelStore.findOne({ uuid: waiter.store });
    if (!store) {
        return new Error("Usuario no pertenece a ningun establecimiento");
    }
    if (store.employe_code != code) {
        return new Error("Codigo incorrecto");
    }
    const token = jsonwebtoken_1.default.sign({ uuid: waiter.uuid, firstname: waiter.name, username: waiter.username, code: waiter.pin }, process.env.JWT_SECRET_KEY || "", { expiresIn: "24h" });
    return {
        token,
        firstname: waiter.firstname,
        lastname: waiter.lastname,
        uuid: waiter.uuid,
        email: waiter.email,
        username: waiter.username,
        code: waiter.code,
        store: waiter.store
    };
};
exports.waiterSignin = waiterSignin;
//# sourceMappingURL=signin.js.map