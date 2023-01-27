import { RouteOptions } from "fastify";
import { getGoersByIdRoute } from "./get-by-id";
import { updateGoerRoute } from "./update";


export const goersRoutes: RouteOptions[] = [
  getGoersByIdRoute,
  updateGoerRoute
];