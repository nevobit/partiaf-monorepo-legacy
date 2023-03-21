"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listBookings = void 0;
const constant_definitions_1 = require("@partiaf/constant-definitions");
const types_1 = require("@partiaf/types");
const listBookings = async (uuid) => {
    const model = await (0, constant_definitions_1.getModel)(constant_definitions_1.Collection.BOOKINGS, types_1.BookingSchemaMongo);
    const bookings = await model.find({});
    return bookings;
};
exports.listBookings = listBookings;
//# sourceMappingURL=list.js.map