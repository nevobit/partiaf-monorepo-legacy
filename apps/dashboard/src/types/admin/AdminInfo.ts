import { Admin } from "@partiaf/types";

export interface AdminInfo{
    admin: Admin;
    loading: boolean;
    success: boolean;
    error: string;
}