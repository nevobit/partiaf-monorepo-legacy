"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createBooking = void 0;
const constant_definitions_1 = require("@partiaf/constant-definitions");
const types_1 = require("@partiaf/types");
const uuid_1 = require("uuid");
const createBooking = async (data) => {
    const model = (0, constant_definitions_1.getModel)(constant_definitions_1.Collection.BOOKINGS, types_1.BookingSchemaMongo);
    const modelStore = (0, constant_definitions_1.getModel)(constant_definitions_1.Collection.STORES, types_1.StoreSchemaMongo);
    const uuid = (0, uuid_1.v4)();
    const store = await modelStore.findOne({ uuid: data.store });
    if (!store)
        return new Error("Store not found");
    const bookings = await model.find({});
    const tables = data.chairs > store.chairs_per_table ? Math.ceil(data.chairs / (store === null || store === void 0 ? void 0 : store.max_per_table)) : 1;
    const table = bookings.length + 1;
    const result = new model({ ...data, uuid, table, tables });
    if (!result)
        throw new Error("No se puede crear la reserva");
    await result.save();
    return result;
};
exports.createBooking = createBooking;
//# sourceMappingURL=create.js.map