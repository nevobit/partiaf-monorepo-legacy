"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createWaiter = void 0;
const constant_definitions_1 = require("@partiaf/constant-definitions");
const types_1 = require("@partiaf/types");
const uuid_1 = require("uuid");
const createWaiter = async (data) => {
    const model = (0, constant_definitions_1.getModel)(constant_definitions_1.Collection.WAITERS, types_1.WaiterSchemaMongo);
    const uuid = (0, uuid_1.v4)();
    const result = new model({ ...data, uuid });
    if (!result)
        throw new Error("601");
    await result.save();
    return { ...result._doc };
};
exports.createWaiter = createWaiter;
//# sourceMappingURL=create.js.map