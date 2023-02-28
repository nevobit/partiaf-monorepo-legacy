"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resetPassword = void 0;
const tslib_1 = require("tslib");
const constant_definitions_1 = require("@partiaf/constant-definitions");
const types_1 = require("@partiaf/types");
const twilio_1 = tslib_1.__importDefault(require("twilio"));
const otp_generator_1 = tslib_1.__importDefault(require("otp-generator"));
const accountSid = "AC3427e300863332c60901d6618b308d23";
const authToken = "9cf19a9c944467c89d3daef3864326fa";
const client = new twilio_1.default.Twilio(accountSid, authToken);
const resetPassword = async ({ phone }) => {
    const model = await (0, constant_definitions_1.getModel)(constant_definitions_1.Collection.USERS, types_1.UserSchemaMongo);
    const user = await model.findOne({ phone: phone });
    const code = otp_generator_1.default.generate(6, { specialChars: false, digits: true, lowerCaseAlphabets: false, upperCaseAlphabets: false });
    if (user) {
        user.verification_code = code;
        await user.save();
        client.messages.create({ body: `Tu codigo de verificacion es ${code}`, from: "+12763294616", to: `+57${phone}` }).then(message => console.log(message.sid));
        return "Codigo enviado";
    }
    else {
        throw new Error("Usuario no encontrado");
    }
};
exports.resetPassword = resetPassword;
//# sourceMappingURL=reset-password.js.map