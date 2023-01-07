"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.changePassword = void 0;
const tslib_1 = require("tslib");
const constant_definitions_1 = require("@partiaf/constant-definitions");
const types_1 = require("@partiaf/types");
const email_service_1 = require("../helpers/email-service");
const bcrypt_1 = tslib_1.__importDefault(require("bcrypt"));
const changePassword = async (email, password) => {
    const model = await (0, constant_definitions_1.getModel)(constant_definitions_1.Collection.ADMINS, types_1.AdminSchemaMongo);
    const admin = await model.findOne({ email: email });
    if (!admin) {
        return new Error("107");
    }
    password = bcrypt_1.default.hashSync(password, 10);
    await admin.save();
    await (0, email_service_1.changePasswordEmail)(email);
    return { ...admin._doc };
};
exports.changePassword = changePassword;
//# sourceMappingURL=change-password.js.map