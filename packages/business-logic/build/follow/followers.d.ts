import { User } from "@partiaf/types";
export declare const getFollowers: (uuid: string, username: string) => Promise<User[] | Error>;
