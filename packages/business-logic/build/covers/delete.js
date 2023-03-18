"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCover = void 0;
const constant_definitions_1 = require("@partiaf/constant-definitions");
const types_1 = require("@partiaf/types");
const deleteCover = async (uuid) => {
    const model = await (0, constant_definitions_1.getModel)(constant_definitions_1.Collection.COVERS, types_1.CoverSchemaMongo);
    const cover = await model.findOne({ uuid: uuid });
    if (!cover) {
        throw new Error("602");
    }
    ;
    await cover.remove();
    return true;
};
exports.deleteCover = deleteCover;
//# sourceMappingURL=delete.js.map