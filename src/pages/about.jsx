import React from "react";
import Typography from "@material-ui/core/Typography";
import "./about.scss"

export default function About() {
  return (
    <div>
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
        This was my first ever MERN stack CRUD app. I decided to dust
        it off, fill it with data, and serve it up. I touched up
        most of the styles but decided not to update any of the
        core functionality for posterity. Its pretty simple but feel free to
        play around - create, read, update, and delete a recipe; or leave me
        one of your favorites so I can try it!
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
