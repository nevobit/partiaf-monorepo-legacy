import { Collection, getModel } from "@partiaf/constant-definitions";
import { Admin, AdminSchemaMongo } from "@partiaf/types";
import { changePasswordEmail } from "../helpers/email-service";
import bcrypt from 'bcrypt';
export const changePassword = async (email:string, password: string) : Promise<Admin | Error> => {
    const model = await getModel(Collection.ADMINS, AdminSchemaMongo);
    const admin = await model.findOne({email:email});

    if(!admin) {return new Error("107")}

    password = bcrypt.hashSync(password, 10);
    await admin.save();
    await changePasswordEmail(email);

    return {...admin._doc};
}