import React from "react";
import Categories from "./Categories";
import Navlink from "./Navlink";
import RecentlyAdded from "./RecentlyAdded";
import "./body.css";
import TopTrend from "./TopTrend";

function Body() {
  return (
    <>
      <Navlink />
      <h1 className="heading">Main Categories</h1>
      <Categories />
      <h2 className="heading">Recently Added</h2>
      <RecentlyAdded />
      <h2 className="heading">Top Trend</h2>
      <TopTrend />
    </>
  );
}

export default Body;
