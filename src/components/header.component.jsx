import React from "react";
import {Link} from "react-router-dom";

import DropdownMenu from "./menu.component.jsx";
import {ReactComponent as ShoppingIcon} from "../assets/recipe-box-icon.svg";

import PersistentDrawerRight from "./menu-drawer.component"
import "./header.styles.scss";

export default function Header() {
  return (
    <div id="header">
      <div className="logo">
      
      </div>

      <div className="menu">
        <PersistentDrawerRight />
      </div>
    </div>
  );
}
