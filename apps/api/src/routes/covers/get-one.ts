import { getCoverById } from "@partiaf/business-logic";
import { RouteOptions } from "fastify";

export const getCoverByIdRoute: RouteOptions = {
  method: "GET",
  url: "/covers/:uuid",
  handler: async (request, reply) => {
    const { params } = request;
    const { uuid } = params as { uuid: string };
    try {
      const obj = await getCoverById(uuid);
      reply.status(200).send(obj);
    } catch (err) {
      if (err instanceof Error) {
        console.log(err);
        reply.status(500).send(err);
      }
    }
  },
};
