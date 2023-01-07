import { Collection, getModel } from "@partiaf/constant-definitions";
import { StoreSchemaMongo } from "@partiaf/types";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const storeSignin = async (uuid:string, password:string): Promise<any> => {
    const model = await getModel(Collection.STORES, StoreSchemaMongo)

    const store = await model.findOne({uuid: uuid});

    if(!store) { return new Error("Negicio no existe o esta inactivo");}

    const match = await bcrypt.compare(password, store.password);

    if(!match) { return new Error("Contraseña incorrecta");}

    const token = jwt.sign({uuid: store.uuid}, process.env.JWT_SECRET_KEY || "", {});

    return {
        token,
        ...store._doc
    };
}