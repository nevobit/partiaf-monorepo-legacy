import { deleteBooking } from "@partiaf/business-logic/build";
import { RouteOptions } from "fastify";

type Params = {
  uuid: string;
};

export const deleteBookingByIdRoute: RouteOptions = {
  method: "DELETE",
  url: "/bookings/:uuid",
  handler: async (request, reply) => {
    const { params } = request;
    const { uuid } = params as Params;
    try {
      const deleted = await  deleteBooking(uuid);
      reply.send(deleted);
    } catch (err) {
      if (err instanceof Error) {
        reply.send(500).send(err.message);
      }
    }
  },
};
