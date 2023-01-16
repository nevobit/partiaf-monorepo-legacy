import { Store } from "@partiaf/types";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createStore, logoutStore, signinStore } from "./thunks";

export type PartialStore = Partial<Store>;

const EmptyStoresState: PartialStore[] =[ 
  {
    uuid: "",
    name: "",
    description: "",
    type: "",
    nit:"",
    email: "",
    phone: 0,
    password: "",
    limit: 0,
    photos: [],
    balance: 0
  }
]

export interface StoreInfo{
  uuid: "",
  name: "",
  description: "",
  type: "",
  nit:"",
  email: "",
  phone: 0,
  password: "",
  limit: 0,
  photos: [],
  balance: 0
}

const EmptyStoreState: StoreInfo = 
  {
    uuid: "",
    name: "",
    description: "",
    type: "",
    nit:"",
    email: "",
    phone: 0,
    password: "",
    limit: 0,
    photos: [],
    balance: 0
  }


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

export const storesSlice = createSlice({
  name: "stores",
  initialState: {
    store:  localStorage.getItem("store")
    ? JSON.parse(localStorage.getItem("store") as string)
    : EmptyStoreState,
    stores: EmptyStoresState,
    loading: false,
    success: false,
    successSignin: false,
    error: ""
  },
  reducers: {
    reset: (state) => {
      state.loading = false,
      state.successSignin = false,
      state.success = false,
      state.error = ''
    },
    loadingStoresById: (state) => {
      state.loading = true;
    },
    setStoresById: (state, action) => {
      state.loading = false;
      state.stores = action.payload.stores;
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
      .addCase(logoutStoreSlice.fulfilled, (state) => {
        state.store = null;
      })
  },
});

export const { reset } = storesSlice.actions;
export const { loadingStoresById, setStoresById } = storesSlice.actions;