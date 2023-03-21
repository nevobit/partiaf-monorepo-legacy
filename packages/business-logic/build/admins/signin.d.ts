import { Admin } from "@partiaf/types";
type AdminPartial = Partial<Admin>;
interface AdminSignin extends AdminPartial {
    token: string;
}
export declare const signinAdmins: ({ email, password }: AdminPartial) => Promise<AdminSignin | Error>;
export {};
