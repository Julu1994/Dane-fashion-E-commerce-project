import { configureStore } from "@reduxjs/toolkit";
import { userAuth } from "./Features/authSlice";
import { cart } from "./Features/cartSlice";
import { cartToggleSlice } from "./Features/cartToggleSlice";
import { shopProducts } from "./Features/productsSlice";
import { toggleSlice } from "./Features/toggleSlice";

export const store = configureStore({
    reducer: {
        user: userAuth.reducer,
        toggle: toggleSlice.reducer,
        products: shopProducts.reducer,
        cartItem: cart.reducer,
        cartToggle: cartToggleSlice.reducer,
    },
});
