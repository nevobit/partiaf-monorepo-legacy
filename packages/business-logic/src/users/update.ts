import { Collection, getModel } from "@partiaf/constant-definitions";
import { User, UserSchemaMongo } from "@partiaf/types";

type PartialUser = Partial<User>;
export const updateUser = async (
  uuid: string,
  data: PartialUser
): Promise<User | Error> => {
  const model = await getModel(Collection.USERS, UserSchemaMongo);
  const user = await model.findOne({ uuid });

  if (!user) {
    throw new Error("602");
  }

  const dataToUpdate = { ...data };

  await user.update(dataToUpdate);

  return { ...user._doc };
};
