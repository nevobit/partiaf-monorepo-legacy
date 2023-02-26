import { User } from "@partiaf/types";
type PartialUser = Partial<User>;
export declare const updateUser: (uuid: string, data: PartialUser) => Promise<User | Error>;
export {};
