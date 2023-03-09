import { Waiter } from "@partiaf/types";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  createWaiterThunk,
  deleteWaiterThunk,
  updateWaiterThunk,
} from "./thunks";

export type PartialWaiter = Partial<Waiter>;

export const EmptyWaitersState: PartialWaiter[] = [
  {
    uuid: "",
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    code: 0,
    last_login: new Date(),
    admin: "",
    store: "",
  },
];

export const EmptyWaiterState: PartialWaiter = {
  uuid: "",
  firstname: "",
  lastname: "",
  username: "",
  email: "",
  code: 0,
  last_login: new Date(),
  admin: "",
  store: "",
};

export const createWaiter = createAsyncThunk(
  "waiters/create",
  async (data: PartialWaiter, thunkAPI) => {
    try {
      return await createWaiterThunk(data);
    } catch (err) {
      console.log(err);
    }
  }
);

export const deleteWaiter = createAsyncThunk(
  "waiters/delete",
  async (uuid: string, thunkAPI) => {
    try {
      return await deleteWaiterThunk(uuid);
    } catch (err) {
      console.log(err);
    }
  }
);

export const updateWaiter = createAsyncThunk(
  "waiters/update",
  async (data: PartialWaiter, thunkAPI) => {
    try {
      return await updateWaiterThunk(data);
    } catch (err) {
      console.log("COVER ERROR", err);
    }
  }
);

export const waitersSlice = createSlice({
  name: "waiters",
  initialState: {
    waiters: EmptyWaitersState,
    waiter: EmptyWaiterState,
    loading: false,
    success: false,
    error: "",
  },
  reducers: {
    reset: (state) => {
      (state.loading = false), (state.success = false), (state.error = "");
    },
    loadingWaitersById: (state) => {
      state.loading = true;
    },
    setWaitersById: (state, action) => {
      state.loading = false;
      state.waiters = action.payload.waiters;
    },
    setOneWaiterById: (state, action) => {
      state.loading = false;
      state.waiter = action.payload.waiter;
    },
    deleteWaiterReducer: (state, action) => {
      state.loading = false;
      state.waiters = action.payload.waiters;
    },
    updateWaiterReducer: (state, action) => {
      state.loading = false;
      state.waiters = action.payload.waiters;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createWaiter.pending, (state) => {
        state.loading = true;
      })
      .addCase(createWaiter.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(createWaiter.rejected, (state, action) => {
        state.loading = false;
        state.error = String(action.payload);
        state.waiter = {};
      })
      .addCase(updateWaiter.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateWaiter.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(updateWaiter.rejected, (state, action) => {
        state.loading = false;
        state.error = String(action.payload);
        state.waiter = {};
      })
      .addCase(deleteWaiter.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteWaiter.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(deleteWaiter.rejected, (state, action) => {
        state.loading = false;
        state.error = String(action.payload);
        state.waiter = {};
      });
  },
});

export const { reset } = waitersSlice.actions;
export const {
  loadingWaitersById,
  setWaitersById,
  setOneWaiterById,
  deleteWaiterReducer,
  updateWaiterReducer,
} = waitersSlice.actions;
