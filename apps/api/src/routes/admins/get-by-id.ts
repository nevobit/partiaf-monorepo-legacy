import { getAdminById } from "@partiaf/business-logic";
import { RouteOptions } from "fastify";


export const getAdminByIdRoute: RouteOptions = {
    method: "GET",
    url: "/admins/:uuid",
    handler: async (request, reply) => {
      const { params } = request;
      const { uuid } = params as { uuid: string };
      try {
       const obj = await getAdminById(uuid);
        reply.status(200).send(obj);
      } catch (err) {
        if (err instanceof Error) {
          console.log(err);
          reply.status(500).send(err);
        }
      }
    },
  };
  