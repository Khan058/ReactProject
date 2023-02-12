import React, { useState } from "react";
import "./Headers.css";
import Logo from "../Pictures/GAWETET_generated-removebg-preview.png";
import ShoppingCart from "../Pictures/shopping-cart.png";
import { GiHamburgerMenu } from "react-icons/gi";

function Headers() {
  const [Showmenu, setShowmenu] = useState(false);
  return (
    <div className="header">
      <img src={Logo} alt="Logo" />
      <div className="search">
        <form action="nosubmit">
          <input
            type="search"
            name="search"
            id="search"
            placeholder="Search..."
          />
        </form>
      </div>
      <div className={Showmenu ? "user-btn responsive-menu" : "user-btn"}>
        <img src={ShoppingCart} alt="ShoppingCart" />
        <a href="/" className="btn">
          Sign Up
        </a>
        <a href="/" className="btn">
          Sing In
        </a>
      </div>
      <div className="responsive">
        <div onClick={() => setShowmenu(!Showmenu)}>
          <GiHamburgerMenu />
        </div>
      </div>
    </div>
  );
}

export default Headers;
