"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllWaiters = void 0;
const constant_definitions_1 = require("@partiaf/constant-definitions");
const types_1 = require("@partiaf/types");
const getAllWaiters = async () => {
    const model = (0, constant_definitions_1.getModel)(constant_definitions_1.Collection.WAITERS, types_1.WaiterSchemaMongo);
    const waiters = (await model.find({}));
    return waiters;
};
exports.getAllWaiters = getAllWaiters;
//# sourceMappingURL=list.js.map