import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
    totalAmount: 0,
    totalQuantity: 0,
};

export const cart = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addTocart(state, action) {
            const selectedItem = action.payload;
            const isExist = state.items.find((i) => i.id === selectedItem.id);

            state.totalAmount = state.totalAmount + selectedItem.price;
            state.totalQuantity = state.totalQuantity + 1;
            if (!isExist) {
                state.items.push({
                    id: selectedItem.id,
                    name: selectedItem.name,
                    price: selectedItem.price,
                    totalItemPrice: selectedItem.price,
                    totalItemQuantity: 1,
                });
            } else {
                (isExist.totalItemPrice =
                    isExist.totalItemPrice + isExist.totalItemPrice),
                    (isExist.totalItemQuantity = isExist.totalItemQuantity + 1);
            }
        },
        removeFromCart(state, action) {
            const removedItem = action.payload;
            state.totalAmount = state.totalAmount - removedItem.price;
            state.totalQuantity = state.totalQuantity - 1;
            if (removedItem == 0) {
                state.items.filter((i) => i.id !== removedItem.id);
            } else {
                removedItem.totalItemPrice =
                    removedItem.totalItemPrice - removedItem.price;
                removedItem.totalItemQuantity =
                    removedItem.totalItemQuantity - 1;
            }
        },
    },
});
export const cartActions = shopProducts.actions;
