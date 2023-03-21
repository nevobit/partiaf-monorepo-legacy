"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBookingsByUser = void 0;
const constant_definitions_1 = require("@partiaf/constant-definitions");
const types_1 = require("@partiaf/types");
const getBookingsByUser = async (uuid) => {
    const model = await (0, constant_definitions_1.getModel)(constant_definitions_1.Collection.BOOKINGS, types_1.BookingSchemaMongo);
    const bookings = await model.find({ user: uuid });
    return bookings;
};
exports.getBookingsByUser = getBookingsByUser;
//# sourceMappingURL=get-by-user.js.map