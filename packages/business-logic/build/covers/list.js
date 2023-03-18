"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllCovers = void 0;
const constant_definitions_1 = require("@partiaf/constant-definitions");
const types_1 = require("@partiaf/types");
const getAllCovers = async () => {
    const model = await (0, constant_definitions_1.getModel)(constant_definitions_1.Collection.COVERS, types_1.CoverSchemaMongo);
    const covers = await model.find({});
    return covers;
};
exports.getAllCovers = getAllCovers;
//# sourceMappingURL=list.js.map