import { createSlice } from "@reduxjs/toolkit";
import AsyncStorage from '@react-native-async-storage/async-storage';


const initialState = {
    waiter: null,
    isLoading: true,
    isSignout: false,
};

export const WaiterKey = 'waiter';

const loginUser = async (action:any) => {
    await AsyncStorage.setItem(WaiterKey, JSON.stringify(action.payload));
}

let state:any = {} 
  
 state = state || initialState;  
  console.log({state})
const authSlice = createSlice({
    name: 'authWaiter',
    initialState: state,
    reducers: {
        restoreToken: (state, action) => {
            state.waiter = action.payload;
            state.isLoading = false;
        },
        signin: (state, action) => {
            state.isSignout = false;
            state.waiter = action.payload;
            loginUser(action);
            
        },
        signout: state => {
            state.isSignout = true;
            state.waiter = null;
        }
    }
})

export const {restoreToken, signin, signout} = authSlice.actions;
export default authSlice.reducer;