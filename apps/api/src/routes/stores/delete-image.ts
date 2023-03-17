import { RouteOptions } from "fastify";
import { deleteImageStore } from "@partiaf/business-logic";

type Params = {
  uuid: string;
  url: string;
};

type Body = {
  url: string | undefined;
};

export const deleteImageByUrlRoute: RouteOptions = {
  method: "DELETE",
  url: "/stores/images/:uuid",
  handler: async (request, reply) => {
    const { params, body } = request;
    const { uuid } = params as Params;
    const { url } = body as any;
    const data = { url: url, uuid: uuid };
    try {
      const deleted = await deleteImageStore(data);
      reply.send(deleted);
    } catch (err) {
      if (err instanceof Error) {
        reply.status(500).send(err.message);
      }
    }
  },
};
