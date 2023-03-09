import { deleteWaiter } from "@partiaf/business-logic";
import { RouteOptions } from "fastify";

type Params = {
  uuid: string;
};

export const deleteWaiterRoute: RouteOptions = {
  method: "DELETE",
  url: "/waiters/:uuid",
  handler: async (request, reply) => {
    const { params } = request;
    const { uuid } = params as Params;
    try {
      const deleted = await deleteWaiter(uuid);
      reply.send(deleted);
    } catch (err) {
      if (err instanceof Error) {
        reply.send(500).send(err.message);
      }
    }
  },
};
