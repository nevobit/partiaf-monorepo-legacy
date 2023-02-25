import { Collection, getModel } from "@partiaf/constant-definitions";
import { FollowSchemaMongo, UserSchemaMongo } from "@partiaf/types";

export const isFollow = async (
  uuid: string,
  username: string
): Promise<Boolean | Error> => {
  const model = getModel(Collection.FOLLOWS, FollowSchemaMongo);
  const userModel = getModel(Collection.USERS, UserSchemaMongo);
  const user = await userModel.findOne({ username: username });
  if (!user) return Error(" Usuario no encontrado");
  const follow = await model
    .find({ user: uuid })
    .where("follow")
    .equals(user.uuid);
  if (follow.length > 0) return true;
  return false;
};
