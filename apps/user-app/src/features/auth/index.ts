import { createSlice } from "@reduxjs/toolkit";
import AsyncStorage from '@react-native-async-storage/async-storage';

const InitialState = async() => {
    const element =  await AsyncStorage.getItem('user') ?JSON.parse(await AsyncStorage.getItem('user') as string) : initialState
    return element;
}

const initialState = {
    user: null,
    isLoading: true,
    isSignout: false,
};

export const UserKey = 'user';



const loginUser = async (action:any) => {
    await AsyncStorage.setItem(UserKey, action.payload);
}

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
            loginUser(action);
        },
        signout: state => {
            state.isSignout = true;
            state.user = null;
        }
    }
})

export const {restoreToken, signin, signout} = authSlice.actions;
export default authSlice.reducer;