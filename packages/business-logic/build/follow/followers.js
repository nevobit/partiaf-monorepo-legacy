"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFollowers = void 0;
const constant_definitions_1 = require("@partiaf/constant-definitions");
const types_1 = require("@partiaf/types");
const getFollowers = async (uuid, username) => {
    const model = (0, constant_definitions_1.getModel)(constant_definitions_1.Collection.FOLLOWS, types_1.FollowSchemaMongo);
    const userModel = (0, constant_definitions_1.getModel)(constant_definitions_1.Collection.USERS, types_1.UserSchemaMongo);
    const user = await userModel.findOne({ username: username });
    if (!user)
        return Error(" Usuario no encontrado");
    const followers = (await model.find({ user: user._id }));
    const followersList = [];
    for await (const follower of followers) {
        const followedUser = (await userModel.findOne({
            _id: follower.follow,
        }));
        if (followedUser) {
            followersList.push(followedUser);
        }
    }
    return followersList;
};
exports.getFollowers = getFollowers;
//# sourceMappingURL=followers.js.map