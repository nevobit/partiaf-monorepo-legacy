"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteBookingByIdRoute = void 0;
const build_1 = require("@partiaf/business-logic/build");
exports.deleteBookingByIdRoute = {
    method: "DELETE",
    url: "/bookings/:uuid",
    handler: async (request, reply) => {
        const { params } = request;
        const { uuid } = params;
        try {
            const deleted = await (0, build_1.deleteBooking)(uuid);
            reply.send(deleted);
        }
        catch (err) {
            if (err instanceof Error) {
                reply.send(500).send(err.message);
            }
        }
    },
};
//# sourceMappingURL=delete-booking.js.map