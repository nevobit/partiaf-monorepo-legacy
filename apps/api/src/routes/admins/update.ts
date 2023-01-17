import { updateAdmin } from "@partiaf/business-logic";
import { Admin } from "@partiaf/types";
import { RouteOptions } from "fastify";

type Params = {
  uuid: string;
};

export const updateAdminRoute: RouteOptions = {
  method: "PUT",
  url: "/admins/:uuid",
  handler: async (request, reply) => {
    const { params, body } = request;
    const { uuid } = params as Params;
    const { data } = body as { data: Admin };
    try {
      const obj = await updateAdmin(uuid, data);
      reply.status(200).send(obj);
    } catch (err) {
      if (err instanceof Error) {
        console.log(err);
        reply.status(500).send(err);
      }
    }
  },
};
