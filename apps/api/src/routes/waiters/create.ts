import { RouteOptions } from "fastify";
import { Waiter } from "@partiaf/types";
import { createWaiter } from "@partiaf/business-logic";

export const createWaiterRoute: RouteOptions = {
  method: "POST",
  url: "/waiters",
  handler: async (request, reply) => {
    const { body } = request;
    const data = body as Waiter;
    try {
      const obj = await createWaiter(data);
      reply.status(201).send(obj);
    } catch (err) {
      if (err instanceof Error) {
        console.log(err);
        reply.status(500).send(err);
      }
    }
  },
};
