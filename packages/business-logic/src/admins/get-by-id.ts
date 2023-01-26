import { Collection, getModel } from "@partiaf/constant-definitions";
import { Admin, AdminSchemaMongo } from "@partiaf/types";

export const getAdminById = async (uuid: string): Promise<Admin[]> => {
  const model = await getModel(Collection.ADMINS, AdminSchemaMongo);
  const obj = (await model.find({ uuid: uuid })) as Admin[];
  return obj;
};
