"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getGoersById = void 0;
const constant_definitions_1 = require("@partiaf/constant-definitions");
const types_1 = require("@partiaf/types");
const getGoersById = async (uuid) => {
    const model = await (0, constant_definitions_1.getModel)(constant_definitions_1.Collection.GOERS, types_1.GoerSchemaMongo);
    const goers = await model.find({ cover: uuid });
    return goers;
};
exports.getGoersById = getGoersById;
//# sourceMappingURL=get-goer.js.map