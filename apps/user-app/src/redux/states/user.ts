import { createSlice } from "@reduxjs/toolkit";
import { UserInfo } from "../../types/user/UserInfo";
import { clearLocalStorage, persistLocalStorage } from "../../utilities/localStorage";

export const EmptyUserState: UserInfo = {
    uuid: "",
    firstname: '',
    username: '',
    token: '',
    photo: "",
    events: ""
};

export const UserKey = 'user';

export const userSlice = createSlice({
    name: 'user',
    initialState: localStorage.getItem('user') ?JSON.parse(localStorage.getItem('user') as string) : EmptyUserState,
    reducers: {
        loginUser: (state, action) => {
            persistLocalStorage<UserInfo>(UserKey, action.payload);
            return action.payload;
        },
        resetUser: () => {
            clearLocalStorage(UserKey);
            return EmptyUserState;
        }
    }
})

export const {loginUser, resetUser} = userSlice.actions;

export default userSlice.reducer;