import { Cover } from "@partiaf/types";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createCoverThunks, getCoverById } from './thunks';

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
        (state.loading = false),
        (state.success = false),
        (state.error = "");
    },
    loadingCoversById: (state) => {
      state.loading = true;
    },
    setCoversById: (state, action) => {
      state.loading = false;
      state.covers = action.payload.covers;
    },
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
      });
  },
});

export const { reset } = coversSlice.actions;
export const { loadingCoversById, setCoversById } = coversSlice.actions;
