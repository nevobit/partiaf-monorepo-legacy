import { Collection, getModel } from "@partiaf/constant-definitions";
import { User, UserSchemaMongo } from "@partiaf/types";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

type PartialUser = Partial<User>
interface UserSignin extends PartialUser {
    token: string;
}

export const userSignin = async ({username, password}: PartialUser): Promise<UserSignin | Error> => {
    const model = await getModel(Collection.USERS, UserSchemaMongo);

    const user = await model.findOne({username: username});

    if(!user) {
        return new Error("Usuario no existe o esta inactivo");
    }

    const match = await bcrypt.compare(password || "", user.password);

    if(!match) {
        return new Error("Contraseña o correo incorrecto");
    }

    const token = jwt.sign({uuid: user.uuid, name: user.name, username: user.username, pin: user.pin}, process.env.JWT_SECRET_KEY || "", {expiresIn: "24h"});

    return {
        token,
        uuid: user.uuid,
        username: user.username,
        name: user.name,
        events: user.events,
        balance: user.balance,
    };
}