"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteImageByUrlRoute = void 0;
const business_logic_1 = require("@partiaf/business-logic");
exports.deleteImageByUrlRoute = {
    method: "DELETE",
    url: "/stores/images/:uuid",
    handler: async (request, reply) => {
        const { params, body } = request;
        const { uuid } = params;
        const { url } = body;
        const data = { url: url, uuid: uuid };
        try {
            const deleted = await (0, business_logic_1.deleteImageStore)(data);
            reply.send(deleted);
        }
        catch (err) {
            if (err instanceof Error) {
                reply.status(500).send(err.message);
            }
        }
    },
};
//# sourceMappingURL=delete-image.js.map