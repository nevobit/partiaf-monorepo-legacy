"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createFollow = void 0;
const constant_definitions_1 = require("@partiaf/constant-definitions");
const types_1 = require("@partiaf/types");
const createFollow = async (uuid, username) => {
    const model = (0, constant_definitions_1.getModel)(constant_definitions_1.Collection.FOLLOWS, types_1.FollowSchemaMongo);
    const userModel = (0, constant_definitions_1.getModel)(constant_definitions_1.Collection.USERS, types_1.UserSchemaMongo);
    const user = await userModel.findOne({ username: username });
    if (!user)
        return Error(" Usuario no encontrado");
    const result = new model({
        user: uuid,
        follow: user.uuid,
    });
    if (!result)
        throw new Error("No se puede crear el cover");
    await result.save();
    return true;
};
exports.createFollow = createFollow;
//# sourceMappingURL=create.js.map