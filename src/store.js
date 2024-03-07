import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/user/userSlice";
import cartReducer from "./features/cart/CartSlice";

const dataSource = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer
  },
});

export default dataSource;