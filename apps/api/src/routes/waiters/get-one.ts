import { getOneWaiter } from "@partiaf/business-logic";
import { RouteOptions } from "fastify";

export const getOneWaiterRoute: RouteOptions = {
  method: "GET",
  url: "/waiter/:uuid",
  handler: async (request, reply) => {
    const { params } = request;
    const { uuid } = params as { uuid: string };
    try {
      const obj = await getOneWaiter(uuid);
      reply.status(200).send(obj);
    } catch (err) {
      if (err instanceof Error) {
        console.log(err);
        reply.status(500).send(err);
      }
    }
  },
};
