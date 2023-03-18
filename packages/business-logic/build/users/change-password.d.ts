import { User } from "@partiaf/types";
export declare const changePassword: (uuid: string, password: string) => Promise<User | Error>;
