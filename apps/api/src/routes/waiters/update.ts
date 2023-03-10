import { RouteOptions } from "fastify";
import { Waiter } from "@partiaf/types";
import { updateWaiter } from "@partiaf/business-logic";

type Params = {
  uuid: string;
};

export const updateWaiterRoute: RouteOptions = {
  method: "PUT",
  url: "/waiters/:uuid",
  handler: async (request, reply) => {
    const { params } = request;
    const { uuid } = params as Params;
    const { body } = request;
    const { data } = body as { data: Waiter };
    try {
      const obj = await updateWaiter(uuid, data);
      reply.status(200).send(obj);
    } catch (err) {
      if (err instanceof Error) {
        console.log(err);
        reply.status(500).send(err);
      }
    }
  },
};
