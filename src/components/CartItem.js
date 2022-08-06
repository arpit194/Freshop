import React from "react";
import classes from "./CartItem.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

const CartItem = () => {
  return (
    <div className={classes.cartItem}>
      <div className={classes.itemImage}></div>
      <div className={classes.details}>
        <div className={classes.itemName}>Avacado (1Kg)</div>
        <div className={classes.itemPrice}>Rs. 10</div>
        <div className={classes.options}>
          <div className={classes.quantity}>
            <div className={`${classes.quantityButton} ${classes.sub}`}>
              <FontAwesomeIcon icon={faMinus} />
            </div>
            <input
              className={classes.amount}
              type="number"
              min={1}
              max={5}
              defaultValue="1"
            />
            <div className={`${classes.quantityButton} ${classes.add}`}>
              <FontAwesomeIcon icon={faPlus} />
            </div>
          </div>
        </div>
        <div className={classes.totalPrice}>Total: Rs 20</div>
      </div>
    </div>
  );
};

export default CartItem;
