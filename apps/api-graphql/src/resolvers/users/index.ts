import { userSignin, userSignup } from "@partiaf/business-logic"
import { User } from "@partiaf/types";

interface PartialUser extends User{
    name: string;
}
export default {
    Mutation: {
        async userSignin(_:any, {username, password}: PartialUser, context: any){
            console.log(username, password);
            const user = await userSignin({username, password});
            console.log({user});
            return user;
        },
        async userSignup(_:any, data:PartialUser, context:any){
            console.log(data)
            const newData = {...data, firstname: data.name}
            const user = await userSignup(newData);
            return user;
        }
    }
}