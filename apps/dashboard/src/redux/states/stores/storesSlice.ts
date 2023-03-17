import { Store } from "@partiaf/types";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  createStore,
  dataProps,
  deleteImageStoreThunk,
  logoutStore,
  signinStore,
  updateStoreThunks,
} from "./thunks";

export type PartialStore = Partial<Store>;

const EmptyStoresState: PartialStore[] = [
  {
    uuid: "",
    name: "",
    description: "",
    type: "",
    nit: "",
    email: "",
    phone: 0,
    password: "",
    limit: 0,
    photos: [],
    balance: 0,
  },
];

export interface StoreInfo {
  uuid: "";
  name: "";
  description: "";
  type: "";
  nit: "";
  email: "";
  phone: 0;
  password: "";
  limit: 0;
  chairs: 0;
  tables: 0;
  photos: [];
  balance: 0;
  max_per_table: 0;
  min_per_table: 0;
  chairs_per_table: 0;
}

const EmptyStoreState: PartialStore = {
  uuid: "",
  name: "",
  description: "",
  type: "",
  nit: "",
  email: "",
  phone: 0,
  password: "",
  chairs: 0,
  tables: 0,
  max_per_table: 0,
  min_per_table: 0,
  chairs_per_table: 0,
  limit: 0,
  photos: [],
  balance: 0,
};

export const createStoreSlice = createAsyncThunk(
  "/stores/create",

  async (data: PartialStore, thunkAPI) => {
    try {
      return await createStore(data);
    } catch (err) {
      console.log(err);
    }
  }
);

interface Props {
  uuid: string;
  password: string;
}

export const loginStore = createAsyncThunk(
  "/stores/signin",
  async (store: Props, thunkAPI) => {
    try {
      return await signinStore(store.uuid, store.password);
    } catch (err: any) {
      const message = err;
      return thunkAPI.rejectWithValue(message.response.data.message);
    }
  }
);

export const logoutStoreSlice = createAsyncThunk("/stores/logout", async () => {
  await logoutStore();
  document.location.href = "/business";
});

export const updateStore = createAsyncThunk(
  "stores/update",
  async (data: PartialStore, thunkAPI) => {
    try {
      return await updateStoreThunks(data?.uuid, data);
    } catch (err) {
      console.log("STORES ERROR", err);
    }
  }
);

export const deleteImageStoreByUrl = createAsyncThunk(
  "stores/images/delete",
  async (info: dataProps, thunkAPI) => {
    try {
      return await deleteImageStoreThunk(info);
    } catch (err) {
      console.log(err);
    }
  }
);

export const storesSlice = createSlice({
  name: "stores",
  initialState: {
    store: EmptyStoreState,
    stores: EmptyStoresState,
    loading: false,
    success: false,
    successSignin: false,
    succesDeleteImage: false,
    error: "",
  },
  reducers: {
    reset: (state) => {
      (state.loading = false),
        (state.successSignin = false),
        (state.succesDeleteImage = false),
        (state.success = false),
        (state.error = "");
    },
    loadingStoresById: (state) => {
      state.loading = true;
    },
    setStoresById: (state, action) => {
      state.loading = false;
      state.stores = action.payload.stores;
    },
    setStoreById: (state, action) => {
      state.loading = false;
      state.store = action.payload.stores;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(loginStore.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginStore.fulfilled, (state, action) => {
        state.loading = false;
        state.successSignin = true;
        state.store = action.payload;
      })
      .addCase(loginStore.rejected, (state, action) => {
        state.loading = false;
        state.error = String(action.payload);
        state.store = {};
      })
      .addCase(createStoreSlice.pending, (state) => {
        state.loading = true;
      })
      .addCase(createStoreSlice.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(createStoreSlice.rejected, (state, action) => {
        state.loading = false;
        state.error = String(action.payload);
        state.stores = [];
      })
      .addCase(updateStore.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateStore.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(updateStore.rejected, (state, action) => {
        state.loading = false;
        state.error = String(action.payload);
        state.store = {};
      })
      .addCase(deleteImageStoreByUrl.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteImageStoreByUrl.fulfilled, (state, action) => {
        state.loading = false;
        state.succesDeleteImage = true;
      })
      .addCase(deleteImageStoreByUrl.rejected, (state, action) => {
        state.loading = false;
        state.error = String(action.payload);
        state.store = {};
      })
      .addCase(logoutStoreSlice.fulfilled, (state) => {
        state.store = {};
      });
  },
});

export const { reset } = storesSlice.actions;
export const { loadingStoresById, setStoresById, setStoreById } =
  storesSlice.actions;
