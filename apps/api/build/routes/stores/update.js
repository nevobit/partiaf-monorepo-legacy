"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateStoreRoute = void 0;
const business_logic_1 = require("@partiaf/business-logic");
exports.updateStoreRoute = { method: "PUT", url: "/stores/:uuid", handler: async (request, reply) => {
        const { params, body } = request;
        const { uuid } = params;
        const { data } = body;
        try {
            const obj = await (0, business_logic_1.updateStore)(uuid, data);
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
//# sourceMappingURL=update.js.map