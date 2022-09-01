import { configureStore } from "@reduxjs/toolkit";
import { userAuth } from "./Features/authSlice";
import { cart } from "./Features/cartSlice";
import { cartToggleSlice } from "./Features/cartToggleSlice";
import { orderHistorySlice } from "./Features/orderHistorySlice";
import { orderSlice } from "./Features/orderSlice";
import { shopProducts } from "./Features/productsSlice";
import { StepSlice } from "./Features/stepSlice";
import { toggleSlice } from "./Features/toggleSlice";

export const store = configureStore({
    reducer: {
        user: userAuth.reducer,
        toggle: toggleSlice.reducer,
        products: shopProducts.reducer,
        cartItem: cart.reducer,
        cartToggle: cartToggleSlice.reducer,
        stepping: StepSlice.reducer,
        orderInfo: orderSlice.reducer,
        orderHistory: orderHistorySlice.reducer,
    },
});
