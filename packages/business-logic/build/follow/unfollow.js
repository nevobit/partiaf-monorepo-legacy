"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.unfollow = void 0;
const constant_definitions_1 = require("@partiaf/constant-definitions");
const types_1 = require("@partiaf/types");
const unfollow = async (uuid, username) => {
    const model = (0, constant_definitions_1.getModel)(constant_definitions_1.Collection.FOLLOWS, types_1.FollowSchemaMongo);
    const userModel = (0, constant_definitions_1.getModel)(constant_definitions_1.Collection.USERS, types_1.UserSchemaMongo);
    const user = await userModel.findOne({ username: username });
    if (!user)
        return Error(" Usuario no encontrado");
    const follow = await model.deleteOne({ user: uuid }).where("follow").equals(user.uuid);
    if (follow.deletedCount > 0)
        return true;
    return false;
};
exports.unfollow = unfollow;
//# sourceMappingURL=unfollow.js.map