import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Cover } from "@partiaf/types";
import { createCover, PartialCover } from "./thunks";

export const EmptyCoverState: PartialCover[] = [
  {
    uuid: "",
    name: "",
    type: "",
    price: 0,
    date: new Date(),
    limit: 0,
    initial_limit: 0,
    hour: "",
    description: "",
    image: "",
    store: "",
    status: false,
  },
];

export const createCoverSlice = createAsyncThunk(
  "/covers",
  async (data: Cover, thunkAPI) => {
    try {
      return await createCover(data);
    } catch (err) {
      console.log(err);
    }
  }
);

export const coversSlice = createSlice({
  name: "covers",
  initialState: {
    covers: EmptyCoverState,
    loading: false,
    success: false,
    successSignin: false,
    error: "",
  },
  reducers: {
    reset: (state) => {
      (state.loading = false),
        (state.successSignin = false),
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
      .addCase(createCoverSlice.pending, (state) => {
        state.loading = true;
      })
      .addCase(createCoverSlice.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(createCoverSlice.rejected, (state, action) => {
        state.loading = false;
        state.error = String(action.payload);
        state.covers = <any>[];
      });
  },
});

export const { reset } = coversSlice.actions;
export const { loadingCoversById, setCoversById } = coversSlice.actions;
