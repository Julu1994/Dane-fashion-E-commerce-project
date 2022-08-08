import { configureStore } from "@reduxjs/toolkit";
import { userAuth } from "./Features/authSlice";
import { toggleSlice } from "./Features/toggleSlice";

export const store = configureStore({
    reducer: {
        user: userAuth.reducer,
        toggle: toggleSlice.reducer,
    },
});
