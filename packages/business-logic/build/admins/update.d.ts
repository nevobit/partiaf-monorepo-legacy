import { Admin } from "@partiaf/types";
type PartialAdmin = Partial<Admin>;
export declare const updateAdmin: (uuid: string, data: PartialAdmin) => Promise<Admin | Error>;
export {};
