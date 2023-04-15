import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./slices/CartSlice";
import CartUiSlice from "./slices/CartUiSlice";

const store = configureStore({
    reducer:{
        cart: CartSlice.reducer,
        cartUi: CartUiSlice.reducer
    }
})

export default store;