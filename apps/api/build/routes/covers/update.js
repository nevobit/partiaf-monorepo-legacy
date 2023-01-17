"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateCoverRoute = void 0;
const business_logic_1 = require("@partiaf/business-logic");
exports.updateCoverRoute = {
    method: "PUT",
    url: "/covers/:uuid",
    handler: async (request, reply) => {
        const { params } = request;
        const { uuid } = params;
        const { body } = request;
        const { data } = body;
        try {
            const obj = await (0, business_logic_1.updateCover)(uuid, data);
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