import React from "react";
import classes from "./Item.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus, faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

const Item = () => {
  return (
    <div className={classes.itemCard}>
      <div
        className={classes.itemImage}
        style={{
          backgroundImage: "url(images/categories/avacado.jpg)",
        }}
      ></div>
      <div className={classes.itemName}>Avacados</div>
      <div className={classes.itemOptions}>
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
        <div className={classes.buttons}>
          <FontAwesomeIcon icon={faHeart} />
          <FontAwesomeIcon icon={faCartPlus} />
        </div>
      </div>
    </div>
  );
};

export default Item;
