import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Admin } from "@partiaf/types";
import { logoutAdmin, signinAdmin, signupAdmin, verificationCodeAdmin } from "./thunks";

export const EmptyadminState: Admin = {
  uuid: "",
  name: "",
  lastname: "",
  email: "",
  identification_type: "",
  identification: 0,
  age: 0,
  phone: 0,
  birthdate: "",
  gender: "",
  address: "",
  password: "",
  photo: "",
  verification_code: 0,
  last_login: new Date(),
};

export const AdminKey = "admin";

const initialState = {
  admin: localStorage.getItem("admin")
    ? JSON.parse(localStorage.getItem("admin") as string)
    : EmptyadminState,
  error: "",
  success: false,
  successSignup: false,
  successVerification: false,
  loading: false,
};

interface Props {
  email: string;
  password: string;
}

export const login = createAsyncThunk(
  "/signin",
  async (admin: Props, thunkAPI) => {
    try {
      return await signinAdmin(admin.email, admin.password);
    } catch (err: any) {
      const message = err;
      return thunkAPI.rejectWithValue(message.response.data.message);
    }
  }
);

type PartialAdmin = Partial<Admin>;

export const signup = createAsyncThunk(
  "/signup",
  async (admin: PartialAdmin, thunkAPI) => {
    try {
      return await signupAdmin(
        admin
      );
    } catch (err: any) {
      const message = err;
      return thunkAPI.rejectWithValue(message.response.data.message);
    }
  }
);

export const verification = createAsyncThunk(
  "/verification",
  async (code: string, thunkAPI) => {
    try {
      return await verificationCodeAdmin(
        code
      );
    } catch (err: any) {
      const message = err;
      return thunkAPI.rejectWithValue(message.response.data.message);
    }
  }
);

export const logout = createAsyncThunk("/logout", async () => {
  await logoutAdmin();
  document.location.href = "/";
});

export const adminsSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    reset: (state) => {
        state.loading = false,
        state.success = false,
        state.error = "",
        state.admin = EmptyadminState;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.admin = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = String(action.payload);
        state.admin = null;
      })
      .addCase(signup.pending, (state) => {
        state.loading = true;
      })
      .addCase(signup.fulfilled, (state, action) => {
        state.loading = false;
        state.successSignup = true;
        state.admin = action.payload;
      })
      .addCase(signup.rejected, (state, action) => {
        state.loading = false;
        state.error = String(action.payload);
        state.admin = null;
      })
      .addCase(logout.fulfilled, (state) => {
        state.admin = null;
      })
      .addCase(verification.pending, (state) => {
        state.loading = true;
      })
      .addCase(verification.fulfilled, (state, action) => {
        state.loading = false;
        state.successVerification = true;
        state.admin= action.payload;
      })
  },
});

export const { reset } = adminsSlice.actions;

export default adminsSlice.reducer;