"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isFollow = void 0;
const constant_definitions_1 = require("@partiaf/constant-definitions");
const types_1 = require("@partiaf/types");
const isFollow = async (uuid, username) => {
    const model = (0, constant_definitions_1.getModel)(constant_definitions_1.Collection.FOLLOWS, types_1.FollowSchemaMongo);
    const userModel = (0, constant_definitions_1.getModel)(constant_definitions_1.Collection.USERS, types_1.UserSchemaMongo);
    const user = await userModel.findOne({ username: username });
    if (!user)
        return Error(" Usuario no encontrado");
    const follow = await model
        .find({ user: uuid })
        .where("follow")
        .equals(user.uuid);
    if (follow.length > 0)
        return true;
    return false;
};
exports.isFollow = isFollow;
//# sourceMappingURL=is-follow.js.map