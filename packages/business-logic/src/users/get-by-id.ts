import { Collection, getModel } from "@partiaf/constant-definitions";
import { User, UserSchemaMongo } from "@partiaf/types";

export const getUserById = async (uuid: string, username: string): Promise<User | Error> => {
    const model = await getModel(Collection.USERS, UserSchemaMongo)

    if(uuid){
        const user = await model.findOne({uuid: uuid}) as User;
        return user;
    }

    if(username){
        const user = await model.findOne({username: username}) as User;
        return user;
    }

    return new Error('Not send correct parameter')
}