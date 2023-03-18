import { User } from "@partiaf/types";
type PartialUser = Partial<User>;
export declare const userSignup: ({ firstname, lastname, username, phone, password }: PartialUser) => Promise<any>;
export {};
