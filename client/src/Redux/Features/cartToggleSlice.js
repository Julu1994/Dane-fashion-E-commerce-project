import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartShow: false,
};

export const cartToggleSlice = createSlice({
    name: "toggleCart",
    initialState,
    reducers: {
        showingCart(state) {
            state.cartShow = !state.cartShow;
        },
    },
});

export const cartToggleActions = cartToggleSlice.actions;
