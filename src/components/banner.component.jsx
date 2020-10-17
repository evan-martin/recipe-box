import React from "react";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import "./banner.styles.scss";

export default function Banner({name}) {
  return (
    <div className="banner-header">
      <div className="banner-title">
        <h1>{name}</h1>
        <ExpandMoreIcon />
      </div>
    </div>
  );
}
