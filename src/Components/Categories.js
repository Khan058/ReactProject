import React from "react";
import "./categories.css";
import { Mainpics } from "./List";

function Categories() {
  return (
    <div className="main-category">
      {Mainpics.map((items) => {
        return <CateTemp {...items} key={items.id}></CateTemp>;
      })}
    </div>
  );
}

const CateTemp = function (props) {
  const { img, title } = props;
  return (
    <>
      <div className="wear-picture">
        <img className="pictures" src={img} alt={title} />
        <div className="title-container">
          <a className="title" href="/">
            <span className="title-text">{title}</span>
          </a>
        </div>
      </div>
    </>
  );
};

export default Categories;
