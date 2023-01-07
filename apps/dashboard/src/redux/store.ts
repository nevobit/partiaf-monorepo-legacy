import { Admin } from "@partiaf/types";
import { configureStore } from "@reduxjs/toolkit";
import { adminsSlice } from "./states/admins/admin";


interface AdminSlice {
  admin: Admin[];
  loading: boolean;
}

export interface AppStore {
  admins: AdminSlice;
}

export default configureStore<AppStore>({
  reducer: {
    admins: adminsSlice.reducer,
  },
});
