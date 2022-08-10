import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./Auth";
import navReducer from "./Navigation";
import wishReducer from "./Wishlist";

const store = configureStore({
  reducer: { auth: authReducer, nav: navReducer, wish: wishReducer },
});

export default store;
