import React from "react";
import {Link} from "react-router-dom";

import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MenuIcon from "@material-ui/icons/Menu";

import "./menu.styles.scss";

export default function DropdownMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MenuIcon className="icon" />
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <Link className="link" to="/" style={{textDecoration: "none"}}>
          <MenuItem onClick={handleClose}>Home</MenuItem>
        </Link>

        <Link className="link" to="/Create" style={{textDecoration: "none"}}>
          <MenuItem onClick={handleClose}>New Recipe</MenuItem>
        </Link>
        <Link className="link" to="/about" style={{textDecoration: "none"}}>
          <MenuItem onClick={handleClose}>About</MenuItem>
        </Link>

        <a
          href="https://github.com/evan-martin/recipe-box"
          style={{textDecoration: "none"}}
          target="_blank"
        >
          <MenuItem onClick={handleClose}>GitHub</MenuItem>
        </a>
      </Menu>
    </div>
  );
}
