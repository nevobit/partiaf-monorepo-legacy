import { Collection, getModel } from "@partiaf/constant-definitions";
import { Admin, AdminSchemaMongo } from "@partiaf/types";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

type AdminPartial = Partial<Admin>;

interface AdminSignin extends AdminPartial {
    token: string;
}

export const signinAdmins = async ({email, password}: AdminPartial): Promise<AdminSignin | Error> => {
    const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY || '';
    const model = await getModel(Collection.ADMINS, AdminSchemaMongo);
    
    console.log({email})
    const admin = await model.findOne({ email: email });
    console.log({admin})
    if (!admin) return new Error('101');

    if(password == null) return new Error('102');

    const match = await bcrypt.compare(password, admin.password);

    if(!match) return new Error('103');
    const token = await jwt.sign({uuid: admin.uuid}, JWT_SECRET_KEY, {expiresIn: '12h'} )

    return {token, ...admin._doc};
}