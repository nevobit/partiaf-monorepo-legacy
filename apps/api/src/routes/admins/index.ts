import { RouteOptions } from "fastify";
import { signinAdminRoute } from "./signin";
import { signupAdminRoute } from "./signup";

export const adminsRoutes: RouteOptions[] = [
    signinAdminRoute,
    signupAdminRoute
]