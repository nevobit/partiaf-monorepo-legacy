import { createCover } from "@partiaf/business-logic";
import { Cover } from "@partiaf/types";
import { RouteOptions } from "fastify";

export const createCoverRoute: RouteOptions = {
  method: "POST",
  url: "/covers",
  handler: async (request, reply) => {
    const { body } = request;
    const data = body as Cover;
    try {
      const obj = await createCover(data);
      reply.status(201).send(obj);
    } catch (err) {
      if (err instanceof Error) {
        console.log(err);
        reply.status(500).send(err);
      }
    }
  },
};
