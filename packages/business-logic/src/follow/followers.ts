import { Collection, getModel } from "@partiaf/constant-definitions";
import { FollowSchemaMongo, User, UserSchemaMongo } from "@partiaf/types";

export const getFollowers = async (
  uuid: string,
  username: string
): Promise<User[] | Error> => {
  const model = getModel(Collection.FOLLOWS, FollowSchemaMongo);
  const userModel = getModel(Collection.USERS, UserSchemaMongo);
  const user = await userModel.findOne({ username: username });
  if (!user) return Error(" Usuario no encontrado");
  const followers = (await model.find({ user: user._id })) as {
    follow: string;
  }[];
  const followersList: User[] = [];
  for await (const follower of followers) {
    const followedUser = (await userModel.findOne({
      _id: follower.follow,
    })) as any;
    if (followedUser) {
      followersList.push(followedUser);
    }
  }
  return followersList;
};
