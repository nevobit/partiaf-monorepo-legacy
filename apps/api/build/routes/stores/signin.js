"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.signinStoreRoute = void 0;
const business_logic_1 = require("@partiaf/business-logic");
exports.signinStoreRoute = {
    method: 'POST',
    url: '/store-signin',
    handler: async (request, reply) => {
        const { body } = request;
        const { uuid, password } = body;
        try {
            const store = await (0, business_logic_1.storeSignin)(uuid, password);
            reply.status(200).send(store);
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