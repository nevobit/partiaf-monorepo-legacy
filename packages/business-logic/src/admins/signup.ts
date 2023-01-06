import { Collection, getModel } from "@partiaf/constant-definitions";
import { Admin, AdminSchemaMongo } from "@partiaf/types";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import {v4 as UUID} from 'uuid';

type AdminPartial = Partial<Admin>;

interface AdminSignup extends AdminPartial {
    token: string;
}

export const signupAdmins = async (data: AdminPartial): Promise<AdminSignup | Error> => {
    const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY || '';
    const model = await getModel(Collection.ADMINS, AdminSchemaMongo);
    
    const uuid = UUID();
    const password = await bcrypt.hashSync(data.password || "", 10);
    const admin = await new model({ ...data, password, uuid});

    if (!admin) return new Error('101');

    await admin.save();

    const token = await jwt.sign({uuid: admin.uuid}, JWT_SECRET_KEY, {expiresIn: '12h'} )

    return {token, ...admin._doc};
}