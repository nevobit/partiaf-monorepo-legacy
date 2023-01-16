import { Cover } from "@partiaf/types";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  createCoverThunks,
  deleteCoverByIdThunks,
  getCoverById,
  updateCoverThunks,
} from "./thunks";

export type PartialCover = Partial<Cover>;

export const EmptyCoversState: PartialCover[] = [
  {
    uuid: "",
    name: "",
    type: "",
    price: 0,
    date: "",
    limit: 0,
    initial_limit: 0,
    hour: "",
    description: "",
    image: "",
    store: "",
    status: false,
  },
];

export const EmptyCoverState: PartialCover = {
  uuid: "",
  name: "",
  type: "",
  price: 0,
  date: "",
  limit: 0,
  initial_limit: 0,
  hour: "",
  description: "",
  image: "",
  store: "",
  status: false,
};

export const createCover = createAsyncThunk(
  "covers/create",
  async (data: PartialCover, thunkAPI) => {
    try {
      return await createCoverThunks(data);
    } catch (err) {
      console.log(err);
    }
  }
);

export const deleteCover = createAsyncThunk(
  "covers/delete",
  async (uuid: string, thunkAPI) => {
    try {
      return await deleteCoverByIdThunks(uuid);
    } catch (err) {
      console.log(err);
    }
  }
);

export const updateCover = createAsyncThunk(
  "covers/update",
  async (data: PartialCover, thunkAPI) => {
    try {
      return await updateCoverThunks(data);
    } catch (err) {
      console.log(err);
    }
  }
);

export const coversSlice = createSlice({
  name: "covers",
  initialState: {
    covers: EmptyCoversState,
    cover: EmptyCoverState,
    loading: false,
    success: false,
    error: "",
  },
  reducers: {
    reset: (state) => {
      (state.loading = false), (state.success = false), (state.error = "");
    },
    loadingCoversById: (state) => {
      state.loading = true;
    },
    setCoversById: (state, action) => {
      state.loading = false;
      state.covers = action.payload.covers;
    },
<<<<<<< HEAD
    setCovers: (state, action) => {
      state.loading = false;
      state.covers = action.payload.covers;
    }
=======
    deleteCoverReducer: (state, action) => {
      state.loading = false;
      state.covers = action.payload.covers;
    },
>>>>>>> af1d52d462c5c500d7e6c795f9b22449f0501502
  },
  extraReducers: (builder) => {
    builder
      .addCase(createCover.pending, (state) => {
        state.loading = true;
      })
      .addCase(createCover.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(createCover.rejected, (state, action) => {
        state.loading = false;
        state.error = String(action.payload);
        state.cover = {};
      })
      .addCase(deleteCover.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteCover.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(deleteCover.rejected, (state, action) => {
        state.loading = false;
        state.error = String(action.payload);
        state.cover = {};
      });
  },
});

export const { reset } = coversSlice.actions;
<<<<<<< HEAD
export const { loadingCoversById, setCoversById, setCovers } = coversSlice.actions;
=======
export const { loadingCoversById, setCoversById, deleteCoverReducer } =
  coversSlice.actions;
>>>>>>> af1d52d462c5c500d7e6c795f9b22449f0501502
