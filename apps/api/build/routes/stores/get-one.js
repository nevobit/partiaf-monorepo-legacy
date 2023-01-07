"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStoreByIdRoute = void 0;
const business_logic_1 = require("@partiaf/business-logic");
exports.getStoreByIdRoute = {
    method: 'GET',
    url: '/store/:uuid',
    handler: async (request, reply) => {
        const { params } = request;
        const { uuid } = params;
        try {
            const store = await (0, business_logic_1.getStoreById)(uuid);
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
//# sourceMappingURL=get-one.js.map