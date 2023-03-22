"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCoversById = void 0;
const constant_definitions_1 = require("@partiaf/constant-definitions");
const types_1 = require("@partiaf/types");
const getCoversById = async (uuid) => {
    const model = await (0, constant_definitions_1.getModel)(constant_definitions_1.Collection.COVERS, types_1.CoverSchemaMongo);
    const covers = await model.find({ store: uuid });
    const activeCovers = covers.filter((cover) => cover.status != "deleted");
    return activeCovers;
};
exports.getCoversById = getCoversById;
//# sourceMappingURL=get-by-id.js.map