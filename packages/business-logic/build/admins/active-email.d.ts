import { Admin } from '@partiaf/types';
type AdminPartial = Partial<Admin>;
interface AdminSignup extends AdminPartial {
    token: string;
}
export declare const activeEmail: (code: string) => Promise<AdminSignup | Error>;
export {};
