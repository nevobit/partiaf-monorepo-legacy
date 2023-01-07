"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.activeEmail = void 0;
const tslib_1 = require("tslib");
const constant_definitions_1 = require("@partiaf/constant-definitions");
const types_1 = require("@partiaf/types");
const jsonwebtoken_1 = tslib_1.__importDefault(require("jsonwebtoken"));
const activeEmail = async (code) => {
    const model = await (0, constant_definitions_1.getModel)(constant_definitions_1.Collection.ADMINS, types_1.AdminSchemaMongo);
    const admin = await model.findOne({ verification_code: code });
    if (!admin) {
        return new Error("106");
    }
    // admin.
    const token = jsonwebtoken_1.default.sign({ uuid: admin.uuid }, process.env.JWT_SIGNIN_KEY || "", {});
    return { token, ...admin };
};
exports.activeEmail = activeEmail;
//# sourceMappingURL=active-email.js.map