import { Collection, getModel } from '@partiaf/constant-definitions';
import { Admin, AdminSchemaMongo } from '@partiaf/types';
import jwt from 'jsonwebtoken'

type AdminPartial = Partial<Admin>;

interface AdminSignup extends AdminPartial {
    token: string;
}

export const activeEmail = async (code: string): Promise<AdminSignup | Error> => {
    const model = await getModel(Collection.ADMINS, AdminSchemaMongo);
    const admin = await model.findOne({ verification_code: code }) as Admin;
    
    if (!admin) { return new Error("106")}

    // admin.
    const token = jwt.sign({uuid: admin.uuid}, process.env.JWT_SIGNIN_KEY || "", {});

    return {token, ...admin};
    
}