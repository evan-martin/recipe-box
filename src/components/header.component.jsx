import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as ShoppingIcon } from "../assets/recipe-box-icon.svg";


import PersistentDrawerRight from "./menu-drawer.component"
import "./header.styles.scss";

export default function Header() {
  return (
    <div className="header">
      <div className="logo">
        <Link to="/" style={{ textDecoration: "none" }}>
        <h1>RecipeBox</h1>
        </Link>
        <ShoppingIcon className="recipe-box-icon" />
      </div>
      <div className="menu">
        <PersistentDrawerRight />
      </div>
    </div>
  );
}
