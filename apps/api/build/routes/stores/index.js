"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.storeRoutes = void 0;
const create_1 = require("./create");
const get_by_id_1 = require("./get-by-id");
const get_one_1 = require("./get-one");
const list_bookings_1 = require("./list-bookings");
const signin_1 = require("./signin");
const update_1 = require("./update");
const delete_booking_1 = require("./delete-booking");
const delete_image_1 = require("./delete-image");
exports.storeRoutes = [
    create_1.createStoreRoute,
    get_by_id_1.getStoresByIdRoute,
    get_one_1.getStoreByIdRoute,
    signin_1.signinStoreRoute,
    update_1.updateStoreRoute,
    list_bookings_1.getBookingsByIdRoute,
    delete_booking_1.deleteBookingByIdRoute,
    delete_image_1.deleteImageByUrlRoute,
];
//# sourceMappingURL=index.js.map