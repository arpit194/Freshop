import React from "react";
import classes from "./Cart.module.css";
import CartItem from "../components/CartItem";

const Cart = () => {
  return (
    <div className={`${classes.cartContainer}`}>
      <div className={classes.header}>Cart</div>
      <div className={classes.cartItems}>
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
      </div>
      <div className={classes.orderContainer}>
        <div className={classes.finalPrice}>Total Price: Rs 400</div>
        <div className={classes.orderButton}>Order</div>
      </div>
    </div>
  );
};

export default Cart;
