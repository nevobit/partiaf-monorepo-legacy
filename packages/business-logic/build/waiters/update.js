"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateWaiter = void 0;
const constant_definitions_1 = require("@partiaf/constant-definitions");
const types_1 = require("@partiaf/types");
const updateWaiter = async (uuid, data) => {
    const model = (0, constant_definitions_1.getModel)(constant_definitions_1.Collection.WAITERS, types_1.WaiterSchemaMongo);
    const waiter = await model.findOne({ uuid });
    if (!waiter) {
        throw new Error("NO SE ENCUENTRA EL COVER");
    }
    const dataToUpdate = { ...data };
    await waiter.updateOne(dataToUpdate);
    return { ...waiter.doc };
};
exports.updateWaiter = updateWaiter;
//# sourceMappingURL=update.js.map