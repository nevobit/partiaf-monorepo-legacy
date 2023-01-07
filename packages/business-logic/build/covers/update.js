"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateCover = void 0;
const constant_definitions_1 = require("@partiaf/constant-definitions");
const types_1 = require("@partiaf/types");
const updateCover = async (uuid, data) => {
    const model = await (0, constant_definitions_1.getModel)(constant_definitions_1.Collection.COVERS, types_1.CoverSchemaMongo);
    const cover = await model.findOne({ uuid: data.uuid });
    if (!cover) {
        throw new Error("602");
    }
    ;
    const dataToUpdate = { ...data };
    await cover.update(dataToUpdate);
    return { ...cover.doc };
};
exports.updateCover = updateCover;
//# sourceMappingURL=update.js.map