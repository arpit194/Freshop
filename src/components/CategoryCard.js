import React from "react";
import classes from "./CategoryCard.module.css";

const CategoryCard = () => {
  return (
    <div className={classes.categoryCard}>
      <div
        className={classes.categoryImage}
        style={{
          backgroundImage: "url(images/categories/fruits.jpg)",
        }}
      ></div>
      <div className={classes.categoryName}>Fruits and Vegetables</div>
    </div>
  );
};

export default CategoryCard;
