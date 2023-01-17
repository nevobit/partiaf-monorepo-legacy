import { createSlice } from "@reduxjs/toolkit";
import AsyncStorage from '@react-native-async-storage/async-storage';

const initialState = {
    user: null,
    isLoading: true,
    isSignout: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        restoreToken: (state, action) => {
            state.user = action.payload;
            state.isLoading = false;
        },
        signin: (state, action) => {
            state.isSignout = false;
            state.user = action.payload;
        },
        signout: state => {
            state.isSignout = true;
            state.user = null;
        }
    }
})

export const {restoreToken, signin, signout} = authSlice.actions;
export default authSlice.reducer;