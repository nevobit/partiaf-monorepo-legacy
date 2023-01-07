import { Collection, getModel } from "@partiaf/constant-definitions";
import { Admin, AdminSchemaMongo } from "@partiaf/types";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import {v4 as UUID} from 'uuid';
import { sendEmail } from "../helpers/email-service";

type AdminPartial = Partial<Admin>;

interface AdminSignup extends AdminPartial {
    token: string;
}

export const signupAdmins = async (data: AdminPartial): Promise<AdminSignup | Error> => {
    const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY || '';
    const model = await getModel(Collection.ADMINS, AdminSchemaMongo);
    
    const uuid = UUID();
    const password = await bcrypt.hashSync(data.password || "", 10);

    const code = await sendEmail(data.email);

    const admin = await new model({ ...data, password, code, uuid});

    if (!admin) return new Error('101');
    const token = await jwt.sign({uuid: admin.uuid}, JWT_SECRET_KEY, {expiresIn: '12h'} )

    await admin.save();
    
    return {token, ...admin._doc};
}