import React from "react";
import "./recentlyadded.css";
import { RecentAdded } from "./List";

function RecentlyAdded() {
  return (
    <div className="recent-container">
      <div className="recently-added">
        {RecentAdded.map((items) => {
          return <RecetTemplate {...items} key={items.id}></RecetTemplate>;
        })}
      </div>
    </div>
  );
}

const RecetTemplate = function (props) {
  const { img, title, price } = props;
  return (
    <div className="recent">
      <img className="recent-pictures" src={img} alt={title} />
      <p>{title}</p>
      <p>{price}</p>
    </div>
  );
};

export default RecentlyAdded;
