import { updateGoer } from "@partiaf/business-logic";
import { Goer } from "@partiaf/types";
import { RouteOptions } from "fastify";

type Params = {
  uuid: string;
};

export const updateGoerRoute: RouteOptions = {
  method: "PUT",
  url: "/goers/:uuid",
  handler: async (request, reply) => {
    const { params } = request;
    const { uuid } = params as Params;
    const { body } = request;
    const { data } = body as { data: Goer };
    try {
      const obj = await updateGoer(uuid, data);
      reply.status(200).send(obj);
    } catch (err) {
      if (err instanceof Error) {
        console.log(err);
        reply.status(500).send(err);
      }
    }
  },
};
