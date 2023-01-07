import { RouteOptions } from "fastify";
import { createStoreRoute } from "./create";
import { getStoresByIdRoute } from "./get-by-id";
import { getStoreByIdRoute } from "./get-one";
import { signinStoreRoute } from "./signin";

export const storeRoutes: RouteOptions[] = [
    createStoreRoute,
    getStoresByIdRoute,
    getStoreByIdRoute,
    signinStoreRoute
]