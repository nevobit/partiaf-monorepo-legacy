"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUser = void 0;
const constant_definitions_1 = require("@partiaf/constant-definitions");
const types_1 = require("@partiaf/types");
const updateUser = async (uuid, data) => {
    const model = await (0, constant_definitions_1.getModel)(constant_definitions_1.Collection.USERS, types_1.UserSchemaMongo);
    const user = await model.findOne({ uuid });
    if (!user) {
        throw new Error("602");
    }
    const dataToUpdate = { ...data };
    await user.update(dataToUpdate);
    return { ...user._doc };
};
exports.updateUser = updateUser;
//# sourceMappingURL=update.js.map