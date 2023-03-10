"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createWaiterRoute = void 0;
const business_logic_1 = require("@partiaf/business-logic");
exports.createWaiterRoute = {
    method: "POST",
    url: "/waiters",
    handler: async (request, reply) => {
        const { body } = request;
        const data = body;
        try {
            const obj = await (0, business_logic_1.createWaiter)(data);
            reply.status(201).send(obj);
        }
        catch (err) {
            if (err instanceof Error) {
                console.log(err);
                reply.status(500).send(err);
            }
        }
    },
};
//# sourceMappingURL=create.js.map