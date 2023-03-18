"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBookingsByStore = void 0;
const constant_definitions_1 = require("@partiaf/constant-definitions");
const types_1 = require("@partiaf/types");
const getBookingsByStore = async (uuid) => {
    const model = await (0, constant_definitions_1.getModel)(constant_definitions_1.Collection.BOOKINGS, types_1.BookingSchemaMongo);
    const bookings = await model.find({ store: uuid });
    const newBookings = bookings.reverse();
    return newBookings;
};
exports.getBookingsByStore = getBookingsByStore;
//# sourceMappingURL=get-by-store.js.map