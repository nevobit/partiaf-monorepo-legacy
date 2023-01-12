"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateAdminRoute = void 0;
const business_logic_1 = require("@partiaf/business-logic");
exports.updateAdminRoute = {
    method: 'PUT',
    url: '/admins',
    handler: async (request, reply) => {
        const { body } = request;
        const { uuid, data } = body;
        try {
            const admin = await (0, business_logic_1.updateStore)(uuid, data);
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
//# sourceMappingURL=update.js.map