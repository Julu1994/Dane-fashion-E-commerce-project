import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    order: {
        address: "",
        city: "",
        postCode: 0,
        item: [],
        totalItem: 0,
        totalAmount: 0,
        email: "",
    },
};

export const orderSlice = createSlice({
    name: "order",
    initialState,
    reducers: {
        setOrder(state, action) {
            state.order = action.payload;
        },
    },
});
export const orderActions = orderSlice.actions;
