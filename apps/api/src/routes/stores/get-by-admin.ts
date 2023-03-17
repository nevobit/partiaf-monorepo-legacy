import { getStoresById } from "@partiaf/business-logic";
import { RouteOptions } from "fastify";

export const getStoreByAdminRoute: RouteOptions = {
  method: "GET",
  url: "/store/:admin",
  handler: async (request, reply) => {
    const { params } = request;
    const { admin } = params as { admin: string };
    try {
      const store = await getStoresById(admin);
      reply.status(200).send(store);
    } catch (err) {
      if (err instanceof Error) {
        console.log(err);
        reply.status(500).send(err);
      }
    }
  },
};
