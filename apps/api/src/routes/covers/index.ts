import { RouteOptions } from "fastify";
import { createCoverRoute } from "./create";
import { deleteCoverByIdRoute } from "./delete";
import { getCoversByIdRoute } from "./get-by-id";
import { getCoverByIdRoute } from "./get-one";
import { updateCoverRoute } from "./update";

export const coverRoutes: RouteOptions[] = [
  createCoverRoute,
  getCoverByIdRoute,
  getCoversByIdRoute,
  updateCoverRoute,
  deleteCoverByIdRoute,
];
