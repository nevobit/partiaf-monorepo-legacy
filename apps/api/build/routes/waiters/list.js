"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllWaitersRoute = void 0;
const business_logic_1 = require("@partiaf/business-logic");
exports.getAllWaitersRoute = {
    method: "GET",
    url: "/waiters",
    handler: async (request, reply) => {
        try {
            const obj = await (0, business_logic_1.getAllWaiters)();
            reply.status(200).send(obj);
        }
        catch (err) {
            if (err instanceof Error) {
                console.log(err);
                reply.status(500).send(err);
            }
        }
    },
};
//# sourceMappingURL=list.js.map