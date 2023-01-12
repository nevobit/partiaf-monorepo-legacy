import { getAllCovers } from "@partiaf/business-logic";
import { RouteOptions } from "fastify";

export const getAllCoversRoute: RouteOptions = {
  method: "GET",
  url: "/covers",
  handler: async (request, reply) => {
    const { params } = request;
    try {
      const obj = await getAllCovers();
      reply.status(200).send(obj);
    } catch (err) {
      if (err instanceof Error) {
        console.log(err);
        reply.status(500).send(err);
      }
    }
  },
};
