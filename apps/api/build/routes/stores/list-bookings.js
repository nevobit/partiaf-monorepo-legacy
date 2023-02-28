"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBookingsByIdRoute = void 0;
const business_logic_1 = require("@partiaf/business-logic");
exports.getBookingsByIdRoute = {
    method: 'GET',
    url: '/bookings/:uuid',
    handler: async (request, reply) => {
        const { params } = request;
        const { uuid } = params;
        try {
            const bookings = await (0, business_logic_1.getBookingsByStore)(uuid);
            reply.status(200).send(bookings);
        }
        catch (err) {
            if (err instanceof Error) {
                console.log(err);
                reply.status(500).send(err);
            }
        }
    }
};
//# sourceMappingURL=list-bookings.js.map