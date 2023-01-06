"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.signinAdminRoute = void 0;
const business_logic_1 = require("@partiaf/business-logic");
exports.signinAdminRoute = {
    method: 'POST',
    url: '/admin-signin',
    handler: async (request, reply) => {
        const { body } = request;
        const { email, password } = body;
        try {
            const admin = await (0, business_logic_1.signinAdmins)({ email, password });
            reply.status(200).send(admin);
        }
        catch (err) {
            if (err instanceof Error) {
                console.log(err);
                reply.status(500).send(err);
            }
        }
    }
};
//# sourceMappingURL=signin.js.map