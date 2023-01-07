import { Collection, getModel } from '@partiaf/constant-definitions';
import { Admin, AdminSchemaMongo } from '@partiaf/types';
import jwt from 'jsonwebtoken'

type AdminPartial = Partial<Admin>;

interface AdminSignup extends AdminPartial {
    token: string;
}

export const activeEmail = async (code: string): Promise<AdminSignup | Error> => {
    const model = await getModel(Collection.ADMINS, AdminSchemaMongo);
    const admin = await model.findOne({ verification_code: code });
    
    if (!admin) { return new Error("106")}

    admin.status = true;
    admin.verification_code = 0;
    await admin.save();
    const token = jwt.sign({uuid: admin.uuid}, process.env.JWT_SECRET_KEY || "", {});

    return {token, ...admin._doc};
}