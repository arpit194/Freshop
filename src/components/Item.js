import React, { useEffect, useRef, useState } from "react";
import classes from "./Item.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faMinus,
  faCartPlus,
  faHeart as solidHeart,
  faSpinner,
  faCircleNotch,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import useWishlist from "../hooks/wishlist-hook";
import useAddToCart from "../hooks/addToCart-hook";

const Item = ({ product }) => {
  const { setWishlist, wishlisted, checkWishlist, wishlistLoading } =
    useWishlist();
  const { addToCart } = useAddToCart();
  const [qty, setQty] = useState(1);

  useEffect(() => {
    checkWishlist(product.id);
  }, []);

  const wishlist = async () => {
    const { itemId, type } = await setWishlist(product);
  };

  const setQuantity = (type) => {
    if (type == "dec") {
      if (qty > 1) {
        setQty(qty - 1);
      }
    } else if (type == "inc") {
      if (qty < 5) {
        setQty(qty + 1);
      }
    }
  };

  return (
    <div className={classes.itemCard}>
      <div
        className={classes.itemImage}
        style={{
          backgroundImage: `url(${product.imageURL})`,
        }}
      ></div>
      <div className={classes.itemName}>{product.name}</div>
      <div className={classes.itemOptions}>
        <div className={classes.quantity}>
          <div
            className={`${classes.quantityButton} ${classes.sub} ${
              qty === 1 && classes.disable
            }`}
            onClick={() => setQuantity("dec")}
          >
            <FontAwesomeIcon icon={faMinus} />
          </div>
          <input
            className={classes.amount}
            type="number"
            min={1}
            max={5}
            value={qty}
            onChange={() => {}}
          />
          <div
            className={`${classes.quantityButton} ${classes.add} ${
              qty === 5 && classes.disable
            }`}
            onClick={() => setQuantity("inc")}
          >
            <FontAwesomeIcon icon={faPlus} />
          </div>
        </div>
        <div className={classes.buttons}>
          {wishlistLoading ? (
            <FontAwesomeIcon icon={faCircleNotch} className={classes.spinner} />
          ) : wishlisted ? (
            <FontAwesomeIcon icon={solidHeart} onClick={wishlist} />
          ) : (
            <FontAwesomeIcon icon={faHeart} onClick={wishlist} />
          )}
          <FontAwesomeIcon icon={faCartPlus} />
        </div>
      </div>
    </div>
  );
};

export default Item;
