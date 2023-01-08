import { AdminInfo } from "@/types/admin/AdminInfo";
import { Admin, Store } from "@partiaf/types";
import { configureStore } from "@reduxjs/toolkit";
import { adminsSlice } from "./states/admins/admin";
import { PartialStore, StoreInfo, storesSlice } from "./states/stores/storesSlice";


interface StoresSlice {
  stores: PartialStore[];
  store: StoreInfo;
  loading: boolean;
  success: boolean;
  successSignin: boolean;
  error: string;
}

export interface AppStore {
  admins: AdminInfo;
  stores: StoresSlice;
}

export default configureStore<AppStore>({
  reducer: {
    admins: adminsSlice.reducer,
    stores: storesSlice.reducer
  },
});
