import React from "react";

import Typography from "@material-ui/core/Typography";

import "./about.scss";

export default function About() {
  return (
    <div className="about-container">
      <div className="about-header">
        <h1>About</h1>
      </div>
      <div className="about-body">
        <Typography
          className="read-paragraph"
          variant="body1"
          color="textPrimary"
          component="p"
        >
          TODO
        </Typography>
        <div className="signature">
          <Typography
            className="read-paragraph"
            variant="body1"
            color="textPrimary"
            component="p"
          >
            -Evan Martin
          </Typography>
        </div>
      </div>
    </div>
  );
}
