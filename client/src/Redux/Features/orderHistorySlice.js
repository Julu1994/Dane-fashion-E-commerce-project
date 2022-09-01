import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    address: "",
    city: "",
    postCode: 0,
    order: {},
};

export const orderHistorySlice = createSlice({
    name: "orderHistory",
    initialState,
    reducers: {
        orderHistory(state, action) {
            state.order = action.payload;
        },
    },
});
export const orderHistoryActions = orderHistorySlice.actions;
