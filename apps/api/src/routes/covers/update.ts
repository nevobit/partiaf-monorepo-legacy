import { updateCover } from "@partiaf/business-logic";
import { Cover } from "@partiaf/types";
import { RouteOptions } from "fastify";

type Params = {
  uuid: string;
};

export const updateCoverRoute: RouteOptions = {
  method: "PUT",
  url: "/covers/:uuid",
  handler: async (request, reply) => {
    const { params } = request;
    const { uuid } = params as Params;
    const { body } = request;
    const { data } = body as { data: Cover };
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
