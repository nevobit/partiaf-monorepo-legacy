import { Goer } from "@partiaf/types";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getGoersByIdThunks, updateGoerThunks } from "./thunks";

export type PartialGoer = Partial<Goer>;

export const EmptyGoersState: PartialGoer[] = [
  {
    uuid: "",
    user: "",
    status: "",
    cost: 0,
    time: "",
    cover: "",
    amount: 0,
  },
];

export const updateGoerSlice = createAsyncThunk(
  "goers/update",
  async (data: Goer, thunkAPI) => {
    try {
      return await updateGoerThunks(data?.uuid, data);
    } catch (err) {
      console.log("GOERS ERROR ===>>>> ", err);
    }
  }
);

export const getGoerSlice = createAsyncThunk(
  "goers/get",
  async (uuid: string, thunkAPI) => {
    try {
      return await getGoersByIdThunks(uuid);
    } catch (err) {
      console.log("GOERS ERROR ===>>>> ", err);
    }
  }
);

export const goersSlice = createSlice({
  name: "goers",
  initialState: {
    goers: EmptyGoersState,
    loading: false,
    success: false,
    error: "",
  },
  reducers: {
    resetGoersReducer: (state) => {
      (state.loading = false), (state.success = false), (state.error = "");
    },
    loadingGoersReducer: (state) => {
      state.loading = true;
    },
    setGoersReducer: (state, action) => {
      state.loading = false;
      state.goers = action.payload.goers;
    },
    updateGoersReducer: (state, action) => {
      state.loading = false;
      state.goers = action.payload.covers;
    },
    getGoersReducer: (state, action) => {
      state.loading = false;
      state.goers = action.payload.covers;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(updateGoerSlice.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateGoerSlice.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(updateGoerSlice.rejected, (state, action) => {
        state.loading = false;
        state.error = String(action.payload);
        state.goers = [];
      })
      .addCase(getGoerSlice.pending, (state) => {
        state.loading = true;
      })
      .addCase(getGoerSlice.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(getGoerSlice.rejected, (state, action) => {
        state.loading = false;
        state.error = String(action.payload);
        state.goers = [];
      });
  },
});

export const { resetGoersReducer } = goersSlice.actions;
export const {
  loadingGoersReducer,
  setGoersReducer,
  updateGoersReducer,
  getGoersReducer,
} = goersSlice.actions;
