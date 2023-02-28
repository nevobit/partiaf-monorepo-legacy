import { createSlice } from "@reduxjs/toolkit";
import AsyncStorage from '@react-native-async-storage/async-storage';


const initialState = {
    user: null,
    isLoading: true,
    isSignout: false,
};

export const UserKey = 'user';

const loginUser = async (action:any) => {
    await AsyncStorage.setItem(UserKey, JSON.stringify(action.payload));
    
}

let state:any = {} 

export const isSignedIn = () => {
      AsyncStorage.getItem(UserKey)
        .then(res => {
          if (res !== null) {
            console.log({res})
            state=res
          } else {
            state= initialState
            console.log(false);
          }
        })
        .catch(err => console.log(err));
      };
  
 state = state || initialState;
  
  console.log({state})
const authSlice = createSlice({
    name: 'auth',
    initialState: state,
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