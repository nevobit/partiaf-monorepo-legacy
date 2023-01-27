"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateGoer = void 0;
const constant_definitions_1 = require("@partiaf/constant-definitions");
const types_1 = require("@partiaf/types");
const updateGoer = async (uuid, data) => {
    const model = await (0, constant_definitions_1.getModel)(constant_definitions_1.Collection.GOERS, types_1.GoerSchemaMongo);
    const goer = await model.findOne({ uuid });
    if (!goer) {
        throw new Error("NO SE ENCUENTRA");
    }
    const dataToUpdate = { ...data };
    await goer.updateOne(dataToUpdate);
    return { ...goer.doc };
};
exports.updateGoer = updateGoer;
//# sourceMappingURL=update.js.map