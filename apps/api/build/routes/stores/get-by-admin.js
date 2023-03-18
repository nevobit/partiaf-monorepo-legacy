"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStoreByAdminRoute = void 0;
const business_logic_1 = require("@partiaf/business-logic");
exports.getStoreByAdminRoute = {
    method: "GET",
    url: "/store/:admin",
    handler: async (request, reply) => {
        const { params } = request;
        const { admin } = params;
        try {
            const store = await (0, business_logic_1.getStoresById)(admin);
            reply.status(200).send(store);
        }
        catch (err) {
            if (err instanceof Error) {
                console.log(err);
                reply.status(500).send(err);
            }
        }
    },
};
//# sourceMappingURL=get-by-admin.js.map