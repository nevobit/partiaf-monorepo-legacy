"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createStore = void 0;
const tslib_1 = require("tslib");
const constant_definitions_1 = require("@partiaf/constant-definitions");
const types_1 = require("@partiaf/types");
const bcrypt_1 = tslib_1.__importDefault(require("bcrypt"));
const uuid_1 = require("uuid");
const createStore = async (data) => {
    const model = (0, constant_definitions_1.getModel)(constant_definitions_1.Collection.STORES, types_1.StoreSchemaMongo);
    const newPassword = bcrypt_1.default.hashSync(data.password, 10);
    const uuid = (0, uuid_1.v4)();
    const result = new model({ ...data, password: newPassword, uuid });
    if (!result)
        throw new Error("No se puede crear el negocio");
    const haveEmail = await model.findOne({ email: data.email });
    if (haveEmail)
        throw new Error("El correo ya esta en uso");
    const haveNit = await model.findOne({ nit: data.nit });
    if (haveNit)
        throw new Error("El nit ya esta registrado");
    await result.save();
    return { ...result._doc };
};
exports.createStore = createStore;
//# sourceMappingURL=create.js.map