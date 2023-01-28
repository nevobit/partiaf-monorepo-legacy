import { RouteOptions } from "fastify";
import { getAllUsersRoute } from "./get-by-id";

export const usersRoutes: RouteOptions[] = [
    getAllUsersRoute
]
