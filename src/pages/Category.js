import React from "react";
import classes from "./Category.module.css";
import Item from "../components/Item";

const Category = () => {
  return (
    <div className={classes.categoryContainer}>
      {/* Header */}
      <div className={classes.header}>
        <div
          className={classes.headerImage}
          style={{ backgroundImage: "url(images/categories/fruits.jpg)" }}
        ></div>
        <div className={classes.headerContent}>Fruits and Vegetables</div>
      </div>

      {/* Items */}
      <div className={classes.items}>
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </div>
    </div>
  );
};

export default Category;
