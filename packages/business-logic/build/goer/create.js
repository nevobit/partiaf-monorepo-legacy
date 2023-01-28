"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createGoer = void 0;
const constant_definitions_1 = require("@partiaf/constant-definitions");
const types_1 = require("@partiaf/types");
const uuid_1 = require("uuid");
const createGoer = async (data) => {
    const model = (0, constant_definitions_1.getModel)(constant_definitions_1.Collection.GOERS, types_1.GoerSchemaMongo);
    const uuid = (0, uuid_1.v4)();
    const result = new model({ ...data, uuid });
    if (!result)
        throw new Error('601');
    await result.save();
    return { ...result._doc };
};
exports.createGoer = createGoer;
//# sourceMappingURL=create.js.map