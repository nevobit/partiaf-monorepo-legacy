import { Collection, getModel } from "@partiaf/constant-definitions";
import { FollowSchemaMongo, UserSchemaMongo } from "@partiaf/types";

export const createFollow = async (
  uuid: string,
  username: string
): Promise<Boolean | Error> => {
  const model = getModel(Collection.FOLLOWS, FollowSchemaMongo);
  const userModel = getModel(Collection.USERS, UserSchemaMongo);
  const user = await userModel.findOne({ username: username });
  if (!user) return Error(" Usuario no encontrado");
  const result = new model({
    user: uuid,
    follow: user.uuid,
  });
  if (!result) throw new Error("No se puede crear el cover");
  await result.save();
  return true;
};
