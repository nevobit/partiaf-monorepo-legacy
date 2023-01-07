"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.activateAdminRoute = void 0;
const business_logic_1 = require("@partiaf/business-logic");
exports.activateAdminRoute = {
    method: 'POST',
    url: '/admin-activate',
    handler: async (request, reply) => {
        const { body } = request;
        const { code } = body;
        try {
            const admin = await (0, business_logic_1.activeEmail)(code);
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
//# sourceMappingURL=activate.js.map