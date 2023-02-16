"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verificationEmailRoute = void 0;
const business_logic_1 = require("@partiaf/business-logic");
exports.verificationEmailRoute = {
    method: "POST",
    url: "/admin-verification-email",
    handler: async (request, reply) => {
        const { body } = request;
        const { email } = body;
        try {
            const admin = await (0, business_logic_1.verificationEmail)(email);
            reply.status(200).send(admin);
        }
        catch (err) {
            if (err instanceof Error) {
                console.log(err);
                reply.status(500).send(err);
            }
        }
    },
};
//# sourceMappingURL=verification-email.js.map