import { updateStore } from "@partiaf/business-logic";
import { Store } from "@partiaf/types";
import { RouteOptions } from "fastify";

type Params = {
  uuid: string;
};

export const updateStoreRoute: RouteOptions = { method: "PUT", url: "/stores/:uuid", handler: async (request, reply) => {
    
    const { params, body } = request;
    const { uuid } = params as Params;
    const { data } = body as { data: Store };

    try {
      const obj = await updateStore(uuid, data);
      reply.status(200).send(obj);
    } catch (err) {
      if (err instanceof Error) {
        console.log(err);
        reply.status(500).send(err);
      }
    }

  },
};
