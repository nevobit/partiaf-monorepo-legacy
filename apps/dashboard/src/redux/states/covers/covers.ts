import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Cover } from "@partiaf/types";
import {
  createCover,
  deleteCover,
  getAllCovers,
  getCoverById,
  updateCover,
} from "./thunks";

export const EmptyCoverState: PartialCover[] = [
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

type PartialCover = Partial<Cover>;

export const CreateCover = createAsyncThunk(
  "/covers",
  async (cover: PartialCover, thunkAPI) => {
    try {
      return await createCover(cover);
    } catch (err) {
      console.log(err);
    }
  }
);

export const getAllCoverSlice = createAsyncThunk(
  "/covers",
  async (thunkAPI) => {
    try {
      return await getAllCovers();
    } catch (err) {
      console.log(err);
    }
  }
);

export const getCoverByIdSlice = createAsyncThunk(
  "/covers/:uuid",
  async (uuid: string, thunkAPI) => {
    try {
      return await getCoverById(uuid);
    } catch (err) {
      console.log(err);
    }
  }
);

export const updateCoverSlice = createAsyncThunk(
  "/covers/:uuid",
  async (info: Cover, thunkAPI) => {
    try {
      return await updateCover(info.uuid, info);
    } catch (err) {
      console.log(err);
    }
  }
);

export const deleteCoverSlice = createAsyncThunk(
  "/covers/:uuid",
  async (uuid: string, thunkAPI) => {
    try {
      return await deleteCover(uuid);
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
      .addCase(CreateCover.pending, (state) => {
        state.loading = true;
      })
      .addCase(CreateCover.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(CreateCover.rejected, (state, action) => {
        state.loading = false;
        state.error = String(action.payload);
        state.covers = <any>[];
      });
    //  .addCase(getAllCoverSlice.pending, (state) => {
    //    state.loading = true;
    //  })
    //  .addCase(getAllCoverSlice.fulfilled, (state, action) => {
    //    state.loading = false;
    //    state.success = true;
    //  })
    //  .addCase(getAllCoverSlice.rejected, (state, action) => {
    //    state.loading = false;
    //    state.error = String(action.payload);
    //    state.covers = <any>[];
    //})
    //  .addCase(getCoverByIdSlice.pending, (state) => {
    //    state.loading = true;
    //  })
    //  .addCase(getCoverByIdSlice.fulfilled, (state, action) => {
    //    state.loading = false;
    //    state.success = true;
    //  })
    //  .addCase(getCoverByIdSlice.rejected, (state, action) => {
    //    state.loading = false;
    //    state.error = String(action.payload);
    //    state.covers = <any>[];
    //  })
    //  .addCase(updateCoverSlice.pending, (state) => {
    //    state.loading = true;
    //  })
    //  .addCase(updateCoverSlice.fulfilled, (state, action) => {
    //    state.loading = false;
    //    state.success = true;
    //  })
    //  .addCase(updateCoverSlice.rejected, (state, action) => {
    //    state.loading = false;
    //    state.error = String(action.payload);
    //    state.covers = <any>[];
    //  })
    //  .addCase(deleteCoverSlice.pending, (state) => {
    //    state.loading = true;
    //  })
    //  .addCase(deleteCoverSlice.fulfilled, (state, action) => {
    //    state.loading = false;
    //    state.success = true;
    //  })
    //  .addCase(deleteCoverSlice.rejected, (state, action) => {
    //    state.loading = false;
    //    state.error = String(action.payload);
    //    state.covers = <any>[];
    //  });
  },
});

export const { reset } = coversSlice.actions;
export const { loadingCoversById, setCoversById } = coversSlice.actions;
