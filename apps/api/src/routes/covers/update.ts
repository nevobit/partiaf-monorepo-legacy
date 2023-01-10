import { updateCover } from "@partiaf/business-logic";
import { Cover } from "@partiaf/types";
import { RouteOptions } from "fastify";

export const updateCoverRoute: RouteOptions = {
  method: "PUT",
  url: "/covers",
  handler: async (request, reply) => {
    const { body } = request;
    const { uuid, data } = body as { uuid: string; data: Cover };
    try {
      const obj = await updateCover(uuid, data);
      reply.status(200).send(obj);
    } catch (err) {
      if (err instanceof Error) {
        console.log(err);
        reply.status(500).send(err);
      }
    }
  },
};
