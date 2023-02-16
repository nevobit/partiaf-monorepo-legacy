"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verificationEmail = void 0;
const constant_definitions_1 = require("@partiaf/constant-definitions");
const types_1 = require("@partiaf/types");
const send_password_reset_emai_1 = require("../helpers/send-password-reset-emai");
const verificationEmail = async (email) => {
    const model = await (0, constant_definitions_1.getModel)(constant_definitions_1.Collection.ADMINS, types_1.AdminSchemaMongo);
    const admin = await model.findOne({ email: email });
    if (!admin) {
        return new Error("107");
    }
    const code = await (0, send_password_reset_emai_1.sendPasswordResetEmail)(email);
    admin.verification_code = code;
    await admin.save();
    return { ...admin._doc };
};
exports.verificationEmail = verificationEmail;
//# sourceMappingURL=verification-email.js.map