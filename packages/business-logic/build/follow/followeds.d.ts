import { User } from "@partiaf/types";
export declare const getFolloweds: (uuid: string, username: string) => Promise<User[] | Error>;
