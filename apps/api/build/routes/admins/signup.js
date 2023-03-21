"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.signupAdminRoute = void 0;
const business_logic_1 = require("@partiaf/business-logic");
exports.signupAdminRoute = {
    method: 'POST',
    url: '/admin-signup',
    handler: async (request, reply) => {
        try {
            const { body } = request;
            const data = body;
            const admin = await (0, business_logic_1.signupAdmins)(data);
            reply.status(200).send(admin);
        }
        catch (err) {
            if (err instanceof Error) {
                reply.status(500).send({ message: err.message });
            }
        }
    }
};
//# sourceMappingURL=signup.js.map