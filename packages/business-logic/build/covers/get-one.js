"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCoverById = void 0;
const constant_definitions_1 = require("@partiaf/constant-definitions");
const types_1 = require("@partiaf/types");
const getCoverById = async (uuid) => {
    const model = await (0, constant_definitions_1.getModel)(constant_definitions_1.Collection.COVERS, types_1.CoverSchemaMongo);
    const cover = await model.findOne({ uuid: uuid });
    return cover;
};
exports.getCoverById = getCoverById;
//# sourceMappingURL=get-one.js.map