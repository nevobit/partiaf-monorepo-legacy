"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllCoversRoute = void 0;
const business_logic_1 = require("@partiaf/business-logic");
exports.getAllCoversRoute = {
    method: "GET",
    url: "/covers",
    handler: async (request, reply) => {
        const { params } = request;
        try {
            const obj = await (0, business_logic_1.getAllCovers)();
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