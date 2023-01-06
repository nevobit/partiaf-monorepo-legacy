"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.signupAdmins = void 0;
const tslib_1 = require("tslib");
const constant_definitions_1 = require("@partiaf/constant-definitions");
const types_1 = require("@partiaf/types");
const jsonwebtoken_1 = tslib_1.__importDefault(require("jsonwebtoken"));
const bcrypt_1 = tslib_1.__importDefault(require("bcrypt"));
const uuid_1 = require("uuid");
const signupAdmins = async (data) => {
    const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY || '';
    const model = await (0, constant_definitions_1.getModel)(constant_definitions_1.Collection.ADMINS, types_1.AdminSchemaMongo);
    const uuid = (0, uuid_1.v4)();
    const password = await bcrypt_1.default.hashSync(data.password || "", 10);
    const admin = await new model({ ...data, password, uuid });
    if (!admin)
        return new Error('101');
    await admin.save();
    const token = await jsonwebtoken_1.default.sign({ uuid: admin.uuid }, JWT_SECRET_KEY, { expiresIn: '12h' });
    return { token, ...admin._doc };
};
exports.signupAdmins = signupAdmins;
//# sourceMappingURL=signup.js.map