import React, { useEffect, useRef } from "react";
import classes from "./Item.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus, faCartPlus ,faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import useWishlist from "../hooks/wishlist-hook";
import useAddToCart from "../hooks/addToCart-hook"

const Item = ({product}) => {

  const { setWishlist, wishlisted, checkWishlist } = useWishlist();
  const qtyRef = useRef();
  const {addToCart} = useAddToCart();

  useEffect(() => {
    checkWishlist(product.id);
  }, []);


  const wishlist = async () => {
   const {itemId , type} =  await setWishlist(product);
  // if(type === "delete" && props.pageType === "wishlist"){
      //props.refresh(itemId)
   //}
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
          {wishlisted ? <FontAwesomeIcon icon={solidHeart} 
          onClick={wishlist}/> : <FontAwesomeIcon icon={faHeart} 
          onClick={wishlist}/>}
          <FontAwesomeIcon icon={faCartPlus} />
        </div>
      </div>
    </div>
  );
};

export default Item;
