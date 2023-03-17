import { RouteOptions } from "fastify";
import { createStoreRoute } from "./create";
import { getStoresByIdRoute } from "./get-by-id";
import { getStoreByIdRoute } from "./get-one";
import { getBookingsByIdRoute } from "./list-bookings";
import { signinStoreRoute } from "./signin";
import { updateStoreRoute } from "./update";
import { deleteBookingByIdRoute } from "./delete-booking";
import { deleteImageByUrlRoute } from "./delete-image";

export const storeRoutes: RouteOptions[] = [
  createStoreRoute,
  getStoresByIdRoute,
  getStoreByIdRoute,
  signinStoreRoute,
  updateStoreRoute,
  getBookingsByIdRoute,
  deleteBookingByIdRoute,
  deleteImageByUrlRoute,
];
