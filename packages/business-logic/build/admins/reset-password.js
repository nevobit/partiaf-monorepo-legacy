"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resetPassword = void 0;
const constant_definitions_1 = require("@partiaf/constant-definitions");
const types_1 = require("@partiaf/types");
const email_service_1 = require("../helpers/email-service");
const resetPassword = async (email) => {
    const model = await (0, constant_definitions_1.getModel)(constant_definitions_1.Collection.ADMINS, types_1.AdminSchemaMongo);
    const admin = await model.findOne({ email: email });
    if (!admin) {
        return new Error("107");
    }
    const code = await (0, email_service_1.sendEmail)(email);
    admin.verification_code = code;
    await admin.save();
    return { ...admin._doc };
};
exports.resetPassword = resetPassword;
//# sourceMappingURL=reset-password.js.map