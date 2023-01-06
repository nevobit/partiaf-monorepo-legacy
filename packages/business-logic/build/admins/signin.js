"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.signinAdmins = void 0;
const tslib_1 = require("tslib");
const constant_definitions_1 = require("@partiaf/constant-definitions");
const types_1 = require("@partiaf/types");
const jsonwebtoken_1 = tslib_1.__importDefault(require("jsonwebtoken"));
const bcrypt_1 = tslib_1.__importDefault(require("bcrypt"));
const signinAdmins = async ({ email, password }) => {
    const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY || '';
    const model = await (0, constant_definitions_1.getModel)(constant_definitions_1.Collection.ADMINS, types_1.AdminSchemaMongo);
    const admin = await model.findOne({ email });
    if (!admin)
        return new Error('101');
    if (password == null)
        return new Error('102');
    const match = await bcrypt_1.default.compare(password, admin.password);
    if (!match)
        return new Error('103');
    const token = await jsonwebtoken_1.default.sign({ uuid: admin.uuid }, JWT_SECRET_KEY, { expiresIn: '12h' });
    return { token, ...admin._doc };
};
exports.signinAdmins = signinAdmins;
//# sourceMappingURL=signin.js.map