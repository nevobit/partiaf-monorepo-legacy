"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userSignup = void 0;
const tslib_1 = require("tslib");
const constant_definitions_1 = require("@partiaf/constant-definitions");
const types_1 = require("@partiaf/types");
const uuid_1 = require("uuid");
const bcrypt_1 = tslib_1.__importDefault(require("bcrypt"));
const jsonwebtoken_1 = tslib_1.__importDefault(require("jsonwebtoken"));
const userSignup = async ({ firstname, lastname, username, phone, password }) => {
    const model = await (0, constant_definitions_1.getModel)(constant_definitions_1.Collection.USERS, types_1.UserSchemaMongo);
    const user = await model.findOne({ username: username });
    if (user) {
        throw new Error("El usuario ya esta registrado");
    }
    else {
        const uuid = (0, uuid_1.v4)();
        if (password) {
            password = bcrypt_1.default.hashSync(password, 10);
        }
        const user = new model({
            uuid,
            firstname,
            lastname,
            username,
            phone,
            password
        });
        await user.save();
        const token = jsonwebtoken_1.default.sign({ uuid: uuid, firstname: firstname, lastname: lastname, username: username, phone: phone }, process.env.JWT_SECRET_KEY || "", { expiresIn: "24h" });
        return {
            token,
            name: user.name,
            username: user.username,
            phone: user.phone,
            uuid: user.uuid,
            createdAt: user.createdAt
        };
    }
};
exports.userSignup = userSignup;
//# sourceMappingURL=signup.js.map