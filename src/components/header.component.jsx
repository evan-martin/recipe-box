import React from "react";
import {Link} from "react-router-dom";

import DropdownMenu from "./menu.component.jsx";
import {ReactComponent as ShoppingIcon} from "../assets/recipe-box-icon.svg";

import "./header.styles.scss";

export default function Header() {
  return (
    <div id="header">
      <div className="logo">
        <Link to="/" style={{textDecoration: "none"}}>
          {" "}
          <h1> Recipe Box </h1>
        </Link>
        <ShoppingIcon className="recipe-box-icon" />
      </div>

      <div className="menu">
        <DropdownMenu />
      </div>
    </div>
  );
}
