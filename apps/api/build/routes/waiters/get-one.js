"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOneWaiterRoute = void 0;
const business_logic_1 = require("@partiaf/business-logic");
exports.getOneWaiterRoute = {
    method: "GET",
    url: "/waiter/:uuid",
    handler: async (request, reply) => {
        const { params } = request;
        const { uuid } = params;
        try {
            const obj = await (0, business_logic_1.getOneWaiter)(uuid);
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
//# sourceMappingURL=get-one.js.map