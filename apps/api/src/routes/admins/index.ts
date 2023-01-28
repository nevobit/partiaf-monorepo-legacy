import { RouteOptions } from "fastify";
import { activateAdminRoute } from "./activate";
import { getAdminByIdRoute } from "./get-by-id";
import { signinAdminRoute } from "./signin";
import { signupAdminRoute } from "./signup";
import { updateAdminRoute } from "./update";

export const adminsRoutes: RouteOptions[] = [
  signinAdminRoute,
  signupAdminRoute,
  activateAdminRoute,
  updateAdminRoute,
  getAdminByIdRoute,
];
