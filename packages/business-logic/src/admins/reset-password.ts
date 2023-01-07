import { Collection, getModel } from "@partiaf/constant-definitions";
import { Admin, AdminSchemaMongo } from "@partiaf/types";
import { sendEmail } from "../helpers/email-service";

export const resetPassword = async (email:string): Promise<Admin | Error> => {
    const model = await getModel(Collection.ADMINS, AdminSchemaMongo);
    const admin = await model.findOne({email: email});

    if(!admin) { return new Error("107")}

    const code = await sendEmail(email);

    admin.verification_code = code;
    await admin.save();

    return {...admin._doc};
}