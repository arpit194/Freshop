import React, { useEffect } from "react";
import classes from "./WishlistItem.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import useWishlist from "../hooks/wishlist-hook";
import {
  faCircleNotch,
  faHeart as solidHeart,
} from "@fortawesome/free-solid-svg-icons";

const WishlistItem = ({ product }) => {
  const { setWishlist, wishlisted, checkWishlist, wishlistLoading } =
    useWishlist();

  useEffect(() => {
    checkWishlist(product.id);
  }, []);

  const wishlistItem = async () => {
    await setWishlist(product);
  };
  return (
    <div className={classes.wishItem}>
      <div
        className={classes.itemImage}
        style={{ backgroundImage: `url(${product.imageURL})` }}
      ></div>
      <div className={classes.details}>
        <div className={classes.itemName}>{product.name}</div>
        <div className={classes.itemPrice}>Rs. {product.price}</div>
        <div className={classes.wishIcon}>
          {wishlistLoading ? (
            <FontAwesomeIcon icon={faCircleNotch} className={classes.spinner} />
          ) : wishlisted ? (
            <FontAwesomeIcon icon={solidHeart} onClick={wishlistItem} />
          ) : (
            <FontAwesomeIcon icon={faHeart} onClick={wishlistItem} />
          )}
        </div>
      </div>
    </div>
  );
};

export default WishlistItem;
