import { FastifyInstance, RouteOptions } from "fastify";
import { healthCheckRoute } from "./health-check";
import { adminsRoutes } from "./admins";
import { storeRoutes } from "./stores";
import { coverRoutes } from "./covers";
import { goersRoutes } from "./goers";
import { usersRoutes } from "./users";
import { waitersRoutes } from "./waiters";

const routes: RouteOptions[] = [
  healthCheckRoute,
  ...adminsRoutes,
  ...storeRoutes,
  ...coverRoutes,
  ...goersRoutes,
  ...usersRoutes,
  ...waitersRoutes,
];
export const registerRoutes = (fastify: FastifyInstance) => {
  fastify.log.warn("Registering routes", routes);

  routes.map((route) => {
    fastify.route(route);
  });
};
