import { createSlice } from "@reduxjs/toolkit";

const initialState = { wishlist: [] };

const wishSlice = createSlice({
  name: "Wishlist",
  initialState: initialState,
  reducers: {
    setWishlist(state, action) {
      state.wishlist = action.payload;
    },
    deleteItem(state, action) {
      state.wishlist = state.wishlist.filter(
        (item) => item.id !== action.payload
      );
    },
    addItem(state, action) {
      state.wishlist = [...state.wishlist, action.payload];
    },
    clearWishlist(state) {
      state.wishlist = [];
    },
  },
});

export const wishActions = wishSlice.actions;
export default wishSlice.reducer;
