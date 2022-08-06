import React from "react";
import CategoryCard from "../components/CategoryCard";
import classes from "./Home.module.css";

const Home = () => {
  return (
    <div className={classes.homeContainer}>
      {/* Header */}
      <div className={classes.header}>
        <div className={classes.headerImage}></div>
        <div className={classes.headerContent}>Welcome to Freshop</div>
      </div>

      {/* Categories */}
      <div className={classes.categoriesContainer}>
        <div className={classes.categoriesTitle}>Categories</div>
        <div className={classes.categories}>
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
        </div>
      </div>
    </div>
  );
};

export default Home;
