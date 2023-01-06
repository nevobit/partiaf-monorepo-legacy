import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {Admin} from '@partiaf/types'

export {}

// export const EmptyUserState: User = {
//   uuid: "",
//   name: "",
//   username: "", 
//   email: "",
//   type: "",
//   verified: false,
//   password: "",
//   phone: "",
//   photo: "",
//   instagram: "",
//   gender: "",
//   biography: "",
//   wishlist: "",
//   interests: [],
//   consumptions: [],
//   followers: [],
//   following: [],
//   matchs: [],
//   friends: [],
//   status: 0,
//   events: 0,
//   balance: 0,
//   verification_code: 0,
//   last_login: "",
//   location: "",
//   date_of_birth: "",
//   notifications: false,
//   pin: "",
// };

export const UserKey = "user";

// const initialState = {
//   user: localStorage.getItem("user")
//     ? JSON.parse(localStorage.getItem("user") as string)
//     : EmptyUserState,
//   error: "",
//   success: false,
//   loading: false,
// };

interface Props {
  username: string;
  password: string;
}

// export const login = createAsyncThunk(
//   "/signin",
//   async (user: Props, thunkAPI) => {
//     try {
//       return await signinAdmin(user.username, user.password);
//     } catch (err: any) {
//       const message = err;
//       return thunkAPI.rejectWithValue(message.response.data.message);
//     }
//   }
// );

// export const logout = createAsyncThunk("/logout", async () => {
//   await logoutAdmin();
// });

// export const userSlice = createSlice({
//   name: "user",
//   initialState,
//   reducers: {
//     reset: (state) => {
//       (state.loading = false),
//         (state.success = false),
//         (state.error = ""),
//         (state.user = EmptyUserState);
//     },
//   },

//   extraReducers: (builder) => {
//     builder
//       .addCase(login.pending, (state) => {
//         state.loading = true;
//       })
//       .addCase(login.fulfilled, (state, action) => {
//         state.loading = false;
//         state.success = true;
//         state.user = action.payload;
//       })
//       .addCase(login.rejected, (state, action) => {
//         state.loading = false;
//         state.error = String(action.payload);
//         state.user = null;
//       })
//       .addCase(logout.fulfilled, (state) => {
//         state.user = null;
//       });
//   },
// });

// export const { reset } = userSlice.actions;

// export default userSlice.reducer;
