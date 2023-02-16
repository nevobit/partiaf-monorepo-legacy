import { Collection, getModel } from "@partiaf/constant-definitions";
import { Admin, AdminSchemaMongo } from "@partiaf/types";
import { sendPasswordResetEmail } from "../helpers/send-password-reset-emai";

export const verificationEmail = async (
  email: string
): Promise<Admin | Error> => {
  const model = await getModel(Collection.ADMINS, AdminSchemaMongo);
  const admin = await model.findOne({ email: email });

  if (!admin) {
    return new Error("107");
  }

  const code = await sendPasswordResetEmail(email);

  admin.verification_code = code;
  await admin.save();

  return { ...admin._doc };
};
