import { AdminInfo } from "@/types/admin/AdminInfo";
import { configureStore } from "@reduxjs/toolkit";
import { adminsSlice } from "./states/admins/admin";
import {
  PartialStore,
  StoreInfo,
  storesSlice,
} from "./states/stores/storesSlice";
import { coversSlice, PartialCover } from "./states/covers/covers";
import { Store } from "@partiaf/types";

interface StoresSlice {
  stores:   PartialStore[];
  store: Store;
  oneStore: PartialStore;
  loading: boolean;
  success: boolean;
  successSignin: boolean;
  error: string;
}

interface CoverssSlice {
  covers: PartialCover[];
  cover: PartialCover;
  loading: boolean;
  success: boolean;
  error: string;
}

export interface AppStore {
  admins: AdminInfo;
  stores: StoresSlice;
  covers: CoverssSlice;
}

export default configureStore<AppStore>({
  reducer: {
    admins: adminsSlice.reducer,
    stores: storesSlice.reducer,
    covers: coversSlice.reducer,
  },
});
