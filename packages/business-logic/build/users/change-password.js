"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.changePassword = void 0;
const tslib_1 = require("tslib");
const constant_definitions_1 = require("@partiaf/constant-definitions");
const types_1 = require("@partiaf/types");
const bcrypt_1 = tslib_1.__importDefault(require("bcrypt"));
const jsonwebtoken_1 = tslib_1.__importDefault(require("jsonwebtoken"));
const changePassword = async (uuid, password) => {
    const model = await (0, constant_definitions_1.getModel)(constant_definitions_1.Collection.USERS, types_1.UserSchemaMongo);
    const user = await model.findOne({ uuid });
    if (!user) {
        throw new Error("602");
    }
    if (password) {
        password = bcrypt_1.default.hashSync(password, 10);
    }
    user.password = password;
    await user.save();
    const token = jsonwebtoken_1.default.sign({ uuid: uuid, firstname: user.firstname, lastname: user.lastname, username: user.username, phone: user.phone }, process.env.JWT_SECRET_KEY || "", { expiresIn: "24h" });
    return {
        token,
        ...user._doc
    };
};
exports.changePassword = changePassword;
//# sourceMappingURL=change-password.js.map