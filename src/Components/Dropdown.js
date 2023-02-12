import React from "react";
import "./dropdown.css";
import { Drop } from "./List";

function DropdownMenu() {
  return (
    <>
      {Drop.map((items) => {
        return <DropTemp {...items}></DropTemp>;
      })}
    </>
  );
}

const DropTemp = function (props) {
  const { western, local, nightwear, seasonal } = props;
  return (
    <div className="dropdown">
      <a href="/">{western}</a>
      <a href="/">{local}</a>
      <a href="/">{nightwear}</a>
      <a href="/">{seasonal}</a>
    </div>
  );
};

export default DropdownMenu;
