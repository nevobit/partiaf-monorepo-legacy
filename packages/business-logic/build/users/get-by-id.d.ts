import { User } from "@partiaf/types";
export declare const getUserById: (uuid: string, username: string) => Promise<User | Error>;
