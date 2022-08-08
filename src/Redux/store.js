import { configureStore } from "@reduxjs/toolkit";
import { userAuth } from "./Features/authSlice";

export const store = configureStore({
    reducer: {
        user: userAuth.reducer,
    },
});
