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
import { goersSlice, PartialGoer } from "./states/goers/goers";

interface StoresSlice {
  stores:   PartialStore[];
  store: Store;
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

interface GoerssSlice {
  goers: PartialGoer[];
  loading: boolean;
  success: boolean;
  error: string;
}

export interface AppStore {
  admins: AdminInfo;
  stores: StoresSlice;
  covers: CoverssSlice;
  goers: GoerssSlice;
}

export default configureStore<AppStore>({
  reducer: {
    admins: adminsSlice.reducer,
    stores: storesSlice.reducer,
    covers: coversSlice.reducer,
    goers: goersSlice.reducer
  },
});
