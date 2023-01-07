"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminsRoutes = void 0;
const activate_1 = require("./activate");
const signin_1 = require("./signin");
const signup_1 = require("./signup");
exports.adminsRoutes = [
    signin_1.signinAdminRoute,
    signup_1.signupAdminRoute,
    activate_1.activateAdminRoute
];
//# sourceMappingURL=index.js.map