"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteWaiter = void 0;
const constant_definitions_1 = require("@partiaf/constant-definitions");
const types_1 = require("@partiaf/types");
const deleteWaiter = async (uuid) => {
    const model = (0, constant_definitions_1.getModel)(constant_definitions_1.Collection.WAITERS, types_1.WaiterSchemaMongo);
    const waiter = await model.findOne({ uuid: uuid });
    if (!waiter) {
        throw new Error("602");
    }
    await waiter.remove();
    return true;
};
exports.deleteWaiter = deleteWaiter;
//# sourceMappingURL=delete.js.map