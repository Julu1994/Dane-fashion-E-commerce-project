import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userInfo: {
        id: null,
        name: null,
        email: null,
    },
};

export const userAuth = createSlice({
    name: "auth",
    initialState,
    reducers: {
        auth(state, action) {
            state.userInfo = action.payload;
        },
    },
});
export const authAction = userAuth.actions;
