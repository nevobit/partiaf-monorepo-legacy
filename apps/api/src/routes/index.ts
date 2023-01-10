import { FastifyInstance, RouteOptions } from "fastify";
import { healthCheckRoute } from "./health-check";
import { adminsRoutes } from "./admins";
import { storeRoutes } from "./stores";
import { coverRoutes } from "./covers";

const routes: RouteOptions[] = [
  healthCheckRoute,
  ...adminsRoutes,
  ...storeRoutes,
  ...coverRoutes,
];
export const registerRoutes = (fastify: FastifyInstance) => {
  fastify.log.warn("Registering routes", routes);

  routes.map((route) => {
    fastify.route(route);
  });
};
