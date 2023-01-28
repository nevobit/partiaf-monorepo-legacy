import { Collection, getModel } from "@partiaf/constant-definitions";
import { User, UserSchemaMongo } from "@partiaf/types";

export const getAllUsers = async (): Promise<User[]> => {
  const model = await getModel(Collection.USERS, UserSchemaMongo);
  const users = (await model.find({})) as User[];
  return users;
};
