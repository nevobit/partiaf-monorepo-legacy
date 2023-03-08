"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteBooking = void 0;
const constant_definitions_1 = require("@partiaf/constant-definitions");
const types_1 = require("@partiaf/types");
const deleteBooking = async (uuid) => {
    const model = await (0, constant_definitions_1.getModel)(constant_definitions_1.Collection.BOOKINGS, types_1.BookingSchemaMongo);
    const booking = await model.findOne({ uuid: uuid });
    if (!booking) {
        throw new Error("602");
    }
    ;
    await booking.remove();
    return true;
};
exports.deleteBooking = deleteBooking;
//# sourceMappingURL=delete.js.map