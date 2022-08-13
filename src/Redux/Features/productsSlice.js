import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: {
        name: "",
        price: 0,
        imgUrl: "",
        catagory: "",
        id: "",
        description: "",
    },
};

export const shopProducts = createSlice({
    name: "products",
    initialState,
    reducers: {
        productsData(state, action) {
            state.products = action.payload;
        },
    },
});
export const productsAction = shopProducts.actions;
