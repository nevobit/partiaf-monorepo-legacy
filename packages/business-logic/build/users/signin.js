"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userSignin = void 0;
const tslib_1 = require("tslib");
const constant_definitions_1 = require("@partiaf/constant-definitions");
const types_1 = require("@partiaf/types");
const bcrypt_1 = tslib_1.__importDefault(require("bcrypt"));
const jsonwebtoken_1 = tslib_1.__importDefault(require("jsonwebtoken"));
const userSignin = async ({ username, password }) => {
    const model = await (0, constant_definitions_1.getModel)(constant_definitions_1.Collection.USERS, types_1.UserSchemaMongo);
    const user = await model.findOne({ username: username });
    if (!user) {
        return new Error("Usuario no existe o esta inactivo");
    }
    const match = await bcrypt_1.default.compare(password || "", user.password);
    if (!match) {
        return new Error("Contraseña o correo incorrecto");
    }
    const token = jsonwebtoken_1.default.sign({ uuid: user.uuid, name: user.name, username: user.username, pin: user.pin }, process.env.JWT_SECRET_KEY || "", { expiresIn: "24h" });
    return {
        token,
        uuid: user.uuid,
        username: user.username,
        name: user.name,
        events: user.events,
        balance: user.balance,
    };
};
exports.userSignin = userSignin;
//# sourceMappingURL=signin.js.map