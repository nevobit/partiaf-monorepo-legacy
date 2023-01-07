import { Collection, getModel } from "@partiaf/constant-definitions";
import { Admin, AdminSchemaMongo } from "@partiaf/types";

export const getAllAdmins = async (): Promise<Admin[]> => {
    const model = await getModel(Collection.ADMINS, AdminSchemaMongo);
    const admins = await model.find() as Admin[];
    return admins;
}