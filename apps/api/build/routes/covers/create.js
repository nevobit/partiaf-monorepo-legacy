"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCoverRoute = void 0;
const business_logic_1 = require("@partiaf/business-logic");
exports.createCoverRoute = {
    method: "POST",
    url: "/covers",
    handler: async (request, reply) => {
        const { body } = request;
        const data = body;
        try {
            const obj = await (0, business_logic_1.createCover)(data);
            reply.status(201).send(obj);
        }
        catch (err) {
            if (err instanceof Error) {
                console.log(err);
                reply.status(500).send(err);
            }
        }
    },
};
//# sourceMappingURL=create.js.map