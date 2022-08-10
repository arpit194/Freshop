import React, { useCallback, useState } from "react";
import { useSelector , useDispatch} from "react-redux";
import { NavActions } from "../Store/Navigation";
import { useHttpClient } from "./http-hook";

const useAddToCart = () => {
  const { isAuthenticated: isLoggedIn, token } = useSelector(
    (state) => state.auth
  );
  const { sendRequest, loading, error } = useHttpClient();
  const dispatch = useDispatch()

  const addToCart = useCallback(async (item, qty) => {
    if (isLoggedIn) {
      const data = await sendRequest(
        `cart/add?token=${token}`,
        "POST",
        JSON.stringify({
          productId: item.id,
          quantity: qty,
        }),
        { "Content-Type": "application/json" }
      );

      if (!data.success) {
        alert(data.message);
      }
    } else dispatch(NavActions.setPage("login"))
  });

  return { addToCart };
};

export default useAddToCart;
