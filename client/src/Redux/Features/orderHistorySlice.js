import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    orders: [
        {
            id: "00",
            order: {
                email: "test@email..com",
                city: "city",
                postCode: "01",
                address: "denmark",
                cartItem: [
                    {
                        totalQuantity: "0",
                        totalAmount: "0",
                        items: [
                            {
                                name: "product",
                                totalItemPrice: "0",
                                id: "01",
                                price: "0",
                            },
                        ],
                    },
                ],
            },
        },
    ],
};

export const orderHistorySlice = createSlice({
    name: "orderHistory",
    initialState,
    reducers: {
        orderHistory(state, action) {
            state.orders = action.payload;
        },
    },
});
export const orderHistoryActions = orderHistorySlice.actions;
