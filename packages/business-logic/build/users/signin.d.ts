import { User } from "@partiaf/types";
type PartialUser = Partial<User>;
interface UserSignin extends PartialUser {
    token: string;
}
export declare const userSignin: ({ username, password }: PartialUser) => Promise<UserSignin | Error>;
export {};
