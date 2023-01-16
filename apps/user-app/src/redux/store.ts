import { configureStore } from "@reduxjs/toolkit";
import { UserInfo } from "../types/user/UserInfo";
import userSliceReducer  from "./states/user";

export interface AppStore {
    user: UserInfo;
}

export default configureStore<AppStore>({
    reducer: {
        user: userSliceReducer
    }
}) 