import { RouteOptions } from "fastify";
import { createWaiterRoute } from "./create";
import { deleteWaiterRoute } from "./delete";
import { getWaitersByIdRoute } from "./get-by-id";
import { getOneWaiterRoute } from "./get-one";
import { getAllWaitersRoute } from "./list";
import { updateWaiterRoute } from "./update";

export const waitersRoutes: RouteOptions[] = [
  createWaiterRoute,
  getAllWaitersRoute,
  getWaitersByIdRoute,
  getOneWaiterRoute,
  updateWaiterRoute,
  deleteWaiterRoute,
];
