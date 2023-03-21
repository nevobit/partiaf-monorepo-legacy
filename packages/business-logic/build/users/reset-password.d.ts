import { User } from "@partiaf/types";
type PartialUser = Partial<User>;
export declare const resetPassword: ({ phone }: PartialUser) => Promise<any>;
export {};
