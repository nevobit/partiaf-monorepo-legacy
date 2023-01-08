import { Admin } from "@partiaf/types";

export interface AdminInfo{
    admin: Admin;
    loading: boolean;
    success: boolean;
    successSignup: boolean;
    successVerification: boolean;
    error: string;
}