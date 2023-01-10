import { deleteCover, updateStore } from "@partiaf/business-logic";
import { RouteOptions } from "fastify";

type Params = {
  uuid: string;
};

export const deleteCoverByIdRoute: RouteOptions = {
  method: "DELETE",
  url: "/covers/:uuid",
  handler: async (request, reply) => {
    const { params } = request;
    const { uuid } = params as Params;
    try {
      const deleted = await deleteCover(uuid);
      reply.send(deleted);
    } catch (err) {
      if (err instanceof Error) {
        reply.send(500).send(err.message);
      }
    }
  },
};
