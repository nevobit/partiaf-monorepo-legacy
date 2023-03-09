"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOneWaiter = void 0;
const constant_definitions_1 = require("@partiaf/constant-definitions");
const types_1 = require("@partiaf/types");
const getOneWaiter = async (uuid) => {
    const model = (0, constant_definitions_1.getModel)(constant_definitions_1.Collection.WAITERS, types_1.WaiterSchemaMongo);
    const waiter = await model.findOne({ uuid: uuid });
    return waiter;
};
exports.getOneWaiter = getOneWaiter;
//# sourceMappingURL=get-one.js.map