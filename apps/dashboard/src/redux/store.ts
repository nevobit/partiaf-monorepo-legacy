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
import { PartialWaiter, waitersSlice } from "./states/waiters/waiters";

interface StoresSlice {
  stores: PartialStore[];
  store: Store;
  oneStore: PartialStore;
  loading: boolean;
  success: boolean;
  successSignin: boolean;
  succesDeleteImage: boolean;
  error: string;
}

interface CoverssSlice {
  covers: PartialCover[];
  cover: PartialCover;
  loading: boolean;
  success: boolean;
  error: string;
}

interface WaiterssSlice {
  waiters: PartialWaiter[];
  waiter: PartialWaiter;
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
  waiters: WaiterssSlice;
}

export default configureStore<AppStore>({
  reducer: {
    admins: adminsSlice.reducer,
    stores: storesSlice.reducer,
    covers: coversSlice.reducer,
    goers: goersSlice.reducer,
    waiters: waitersSlice.reducer
  },
});
