import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartShow: false,
};

export const cartToggleSlice = createSlice({
    name: "toggleCart",
    initialState,
    reducers: {
        showingCart(state) {
            state.cartShow = true;
        },
        hidingCart(state) {
            state.cartShow = false;
        },
    },
});

export const cartToggleActions = cartToggleSlice.actions;
