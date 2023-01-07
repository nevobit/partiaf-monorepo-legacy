"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStoresByIdRoute = void 0;
const business_logic_1 = require("@partiaf/business-logic");
exports.getStoresByIdRoute = {
    method: 'GET',
    url: '/stores/:uuid',
    handler: async (request, reply) => {
        const { params } = request;
        const { uuid } = params;
        try {
            const stores = await (0, business_logic_1.getStoresById)(uuid);
            reply.status(200).send(stores);
        }
        catch (err) {
            if (err instanceof Error) {
                console.log(err);
                reply.status(500).send(err);
            }
        }
    }
};
//# sourceMappingURL=get-by-id.js.map