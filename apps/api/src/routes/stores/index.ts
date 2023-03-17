import { RouteOptions } from "fastify";
import { createStoreRoute } from "./create";
import { getStoresByIdRoute } from "./get-by-id";
import { getBookingsByIdRoute } from "./list-bookings";
import { signinStoreRoute } from "./signin";
import { updateStoreRoute } from "./update";
import { deleteBookingByIdRoute } from "./delete-booking";
import { getStoreByAdminRoute } from "./get-by-admin";

export const storeRoutes: RouteOptions[] = [
  createStoreRoute,
  getStoresByIdRoute,
  getStoreByAdminRoute,
  signinStoreRoute,
  updateStoreRoute,
  getBookingsByIdRoute,
  deleteBookingByIdRoute,
];
