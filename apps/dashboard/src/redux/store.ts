import { AdminInfo } from "@/types/admin/AdminInfo";
import { Admin } from "@partiaf/types";
import { configureStore } from "@reduxjs/toolkit";
import { adminsSlice } from "./states/admins/admin";

export interface AppStore {
  admins: AdminInfo;
}

export default configureStore<AppStore>({
  reducer: {
    admins: adminsSlice.reducer,
  },
});
