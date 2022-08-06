import React from "react";
import classes from "./Wishlist.module.css";
import WishlistItem from "../components/WishlistItem";

const Wishlist = () => {
  return (
    <div className={classes.wishContainer}>
      <div className={classes.header}>Wishlist</div>
      <div className={classes.wishItems}>
        <WishlistItem />
        <WishlistItem />
        <WishlistItem />
        <WishlistItem />
        <WishlistItem />
        <WishlistItem />
        <WishlistItem />
        <WishlistItem />
        <WishlistItem />
      </div>
    </div>
  );
};

export default Wishlist;
