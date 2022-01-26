import React from "react";

import "./banner.styles.scss";

export default function Banner({name, category}) {
  return (
    <div className="banner-header">
      <div className="banner-title">
        <h1>{name}</h1>
      </div>
  
    </div>
  );
}
