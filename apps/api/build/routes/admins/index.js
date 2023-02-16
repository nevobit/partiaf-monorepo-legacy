"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminsRoutes = void 0;
const activate_1 = require("./activate");
const get_by_id_1 = require("./get-by-id");
const signin_1 = require("./signin");
const signup_1 = require("./signup");
const update_1 = require("./update");
const verification_email_1 = require("./verification-email");
exports.adminsRoutes = [
    signin_1.signinAdminRoute,
    signup_1.signupAdminRoute,
    activate_1.activateAdminRoute,
    update_1.updateAdminRoute,
    get_by_id_1.getAdminByIdRoute,
    verification_email_1.verificationEmailRoute
];
//# sourceMappingURL=index.js.map