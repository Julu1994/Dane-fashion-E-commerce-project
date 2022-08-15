import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    item: [
        {
            name: "",
            price: 5,
            imgUrl: "",
            catagory: "",
            type: "",
            id: "1",
            quantity: 0,
            description: "",
        },
    ],
};

export const shopProducts = createSlice({
    name: "products",
    initialState,
    reducers: {
        productsData(state, action) {
            state.item = action.payload;
        },
    },
});
export const productsActions = shopProducts.actions;
