import { userSignin, userSignup } from "@partiaf/business-logic"
import { User } from "@partiaf/types";

type PartialUser = Partial<User>;

export default {
    Mutation: {
        async userSignin(_:any, {username, password}: PartialUser, context: any){
            const user = await userSignin({username, password});
            return user;
        },
        async userSignup(_:any, data:PartialUser, context:any){
            const user = await userSignup(data);
            return user;
        }
    }
}