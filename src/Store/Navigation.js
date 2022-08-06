import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentPage: "home",
  previousPage: "home",
  cartOpen: false,
  wishlistOpen: false,
};

const NavSlice = createSlice({
  name: "Navigation",
  initialState,
  reducers: {
    setPage: (state, action) => {
      state.previousPage = state.currentPage;
      state.currentPage = action.payload;
      state.cartOpen = false;
      state.wishlistOpen = false;
    },
    setCart: (state) => {
      state.cartOpen = !state.cartOpen;
      state.wishlistOpen = false;
    },
    setWishlist: (state) => {
      state.wishlistOpen = !state.wishlistOpen;
      state.cartOpen = false;
    },
  },
});

export const NavActions = NavSlice.actions;

export default NavSlice.reducer;
