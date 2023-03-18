import { Admin } from "@partiaf/types";
type AdminPartial = Partial<Admin>;
interface AdminSignup extends AdminPartial {
    token: string;
}
export declare const signupAdmins: (data: AdminPartial) => Promise<AdminSignup | Error>;
export {};
