import { Collection, getModel } from "@partiaf/constant-definitions";
import { User, UserSchemaMongo } from "@partiaf/types";
type PartialUser = Partial<User>;

export const validationCode = async (uuid: string, code:string): Promise<any> => {
    const model = await getModel(Collection.USERS, UserSchemaMongo)

    const user = await model.findOne({uuid: uuid});
    
    if(user){
        if(user.verification_code == code){
            return "801"            
        }else{
            throw new Error("909") 
        }
    }else{
        throw new Error("Usuario no encontrado")
    }
}