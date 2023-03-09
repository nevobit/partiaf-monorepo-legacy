import { getAllWaiters } from "@partiaf/business-logic";
import { RouteOptions } from "fastify";

export const getAllWaitersRoute: RouteOptions = {
  method: "GET",
  url: "/waiters",
  handler: async (request, reply) => {
    try {
      const obj = await getAllWaiters();
      reply.status(200).send(obj);
    } catch (err) {
      if (err instanceof Error) {
        console.log(err);
        reply.status(500).send(err);
      }
    }
  },
};
