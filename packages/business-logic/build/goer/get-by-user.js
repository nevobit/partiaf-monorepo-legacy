"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getGoersByUser = void 0;
const constant_definitions_1 = require("@partiaf/constant-definitions");
const types_1 = require("@partiaf/types");
const getGoersByUser = async (uuid) => {
    const model = await (0, constant_definitions_1.getModel)(constant_definitions_1.Collection.GOERS, types_1.GoerSchemaMongo);
    const goers = await model.find({ user: uuid });
    return goers;
};
exports.getGoersByUser = getGoersByUser;
//# sourceMappingURL=get-by-user.js.map