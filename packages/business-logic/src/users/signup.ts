import { Collection, getModel } from "@partiaf/constant-definitions";
import { User, UserSchemaMongo } from "@partiaf/types";
import {v4 as UUID} from 'uuid';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

type PartialUser = Partial<User>;
export const userSignup = async ({firstname, lastname, username, phone, password}: PartialUser): Promise<any> => {
    const model = await getModel(Collection.USERS, UserSchemaMongo)

    const user = await model.findOne({username: username});


    if(user){
         throw new Error("El usuario ya esta registrado");
    }else{
        const uuid = UUID(); 
        if(password){password = bcrypt.hashSync(password, 10);}
        
        const user = new model({
            uuid,
            firstname,
            lastname,
            username,
            phone,
            password
        });

        await user.save();

        const token = jwt.sign({uuid: uuid, firstname: firstname, lastname: lastname, username: username, phone:phone}, process.env.JWT_SECRET_KEY || "", {expiresIn: "24h"});

        return {
            token,
            ...user._doc
        };
        
    }
}