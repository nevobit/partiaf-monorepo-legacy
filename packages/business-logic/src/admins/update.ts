import { Collection, getModel } from "@partiaf/constant-definitions";
import { Admin, AdminSchemaMongo } from "@partiaf/types";

type PartialAdmin = Partial<Admin>;

export const updateAdmin = async ( uuid: string, data: PartialAdmin ): Promise<Admin | Error> => {
  
  const model = await getModel(Collection.ADMINS, AdminSchemaMongo);
  const admin = await model.findOne({ uuid });

  if (!admin) {
    throw new Error("602");
  }

  const dataToUpdate = { ...data };

  await admin.update(dataToUpdate);

  return { ...admin._doc };
  
};
