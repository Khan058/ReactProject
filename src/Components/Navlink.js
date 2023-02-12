import React, { useState } from "react";
import "./navlink.css";
import { List } from "./List";
import DropdownMenu from "./Dropdown";
import { Template } from "./Navitems";

function Navlinks() {
  const [menstate, mensetState] = useState(false);
  const [womenstate, womensetState] = useState(false);
  const [kidsstate, kidssetState] = useState(false);
  const [opstate, opsetState] = useState(false);

  return (
    <>
      <div className="navlinks">
        {List.map((items) => {
          if (items.link === "Men") {
            return (
              <div
                onMouseEnter={() => mensetState(true)}
                onMouseLeave={() => mensetState(false)}
              >
                {" "}
                <Template {...items} key={items.id}></Template>
                {menstate && <DropdownMenu />}
              </div>
            );
          } else if (items.link === "women") {
            return (
              <div
                onMouseEnter={() => womensetState(true)}
                onMouseLeave={() => womensetState(false)}
              >
                {" "}
                <Template {...items} key={items.id}></Template>
                {womenstate && <DropdownMenu />}
              </div>
            );
          } else if (items.link === "kids") {
            return (
              <div
                onMouseEnter={() => kidssetState(true)}
                onMouseLeave={() => kidssetState(false)}
              >
                {" "}
                <Template {...items} key={items.id}></Template>
                {kidsstate && <DropdownMenu />}
              </div>
            );
          } else if (items.link === "our picks") {
            return (
              <div
                onMouseEnter={() => opsetState(true)}
                onMouseLeave={() => opsetState(false)}
              >
                {" "}
                <Template {...items} key={items.id}></Template>
                {opstate && <DropdownMenu />}
              </div>
            );
          }
          return <Template {...items} key={items.id}></Template>;
        })}
      </div>
    </>
  );
}

export default Navlinks;
