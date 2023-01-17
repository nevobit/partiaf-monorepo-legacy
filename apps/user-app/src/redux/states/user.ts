import { createSlice } from "@reduxjs/toolkit";
import { UserInfo } from "../../types/user/UserInfo";
// import AsyncStorage from '@react-native-async-storage/async-storage';

export const EmptyUserState: UserInfo = {
    uuid: "",
    firstname: '',
    username: '',
    token: '',
    photo: "",
    events: ""
};

export const UserKey = 'user';

// export const userSlice = async() => createSlice({
//     name: 'user',
//     initialState: await AsyncStorage.getItem('user') ?JSON.parse(await AsyncStorage.getItem('user') as string) : EmptyUserState,
//     reducers: {
//         loginUser: async (state, action) => {
//             await AsyncStorage.setItem(UserKey, action.payload);
//             return action.payload;
//         },
//         resetUser: async () => {
//             await AsyncStorage.removeItem(UserKey);
//             return EmptyUserState;
//         }
//     }
// })

// export const {loginUser, resetUser} = userSlice.actions;

// export default userSlice.reducer;