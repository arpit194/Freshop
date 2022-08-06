import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./Auth";
import navReducer from "./Navigation";

const store = configureStore({
  reducer: { auth: authReducer, nav: navReducer },
});

export default store;
