import React from "react";
import classes from "./WishlistItem.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

const WishlistItem = () => {
  return (
    <div className={classes.wishItem}>
      <div className={classes.itemImage}></div>
      <div className={classes.details}>
        <div className={classes.itemName}>Avacado (1Kg)</div>
        <div className={classes.itemPrice}>Rs. 10</div>
        <div className={classes.wishIcon}>
          <FontAwesomeIcon icon={faHeart} />
        </div>
      </div>
    </div>
  );
};

export default WishlistItem;
