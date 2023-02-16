import { verificationEmail } from "@partiaf/business-logic";
import { RouteOptions } from "fastify";

export const verificationEmailRoute: RouteOptions = {
  method: "POST",
  url: "/admin-verification-email",
  handler: async (request, reply) => {
    const { body } = request;
    const { email } = body as { email: string };
    try {
      const admin = await verificationEmail(email);
      reply.status(200).send(admin);
    } catch (err) {
      if (err instanceof Error) {
        console.log(err);
        reply.status(500).send(err);
      }
    }
  },
};
