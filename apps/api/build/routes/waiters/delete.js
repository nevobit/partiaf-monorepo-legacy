"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteWaiterRoute = void 0;
const business_logic_1 = require("@partiaf/business-logic");
exports.deleteWaiterRoute = {
    method: "DELETE",
    url: "/waiters/:uuid",
    handler: async (request, reply) => {
        const { params } = request;
        const { uuid } = params;
        try {
            const deleted = await (0, business_logic_1.deleteWaiter)(uuid);
            reply.send(deleted);
        }
        catch (err) {
            if (err instanceof Error) {
                reply.send(500).send(err.message);
            }
        }
    },
};
//# sourceMappingURL=delete.js.map