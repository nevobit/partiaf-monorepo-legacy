import { RouteOptions } from "fastify";
import { createCoverRoute } from "./create";
import { deleteCoverByIdRoute } from "./delete";
import { getCoversByIdRoute } from "./get-by-id";
import { getAllCoversRoute } from "./list";
import { updateCoverRoute } from "./update";

export const coverRoutes: RouteOptions[] = [
  createCoverRoute,
  getAllCoversRoute,
  getCoversByIdRoute,
  updateCoverRoute,
  deleteCoverByIdRoute,
];
