"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createStoreRoute = void 0;
const business_logic_1 = require("@partiaf/business-logic");
exports.createStoreRoute = {
    method: 'POST',
    url: '/stores',
    handler: async (request, reply) => {
        const { body } = request;
        const data = body;
        try {
            const store = await (0, business_logic_1.createStore)(data);
            reply.status(201).send(store);
        }
        catch (err) {
            if (err instanceof Error) {
                console.log(err);
                reply.status(500).send(err);
            }
        }
    }
};
//# sourceMappingURL=create.js.map