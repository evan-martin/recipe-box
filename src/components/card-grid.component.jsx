import React from "react";
import {Link} from "react-router-dom";

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";


import "./card-grid.styles.scss";

export default function SpacingGrid({recipes}) {
  return (
    <div className="grid-container">
      <Grid container className="root">
        <Grid container justify="center" spacing={3} className="grid">
          {recipes.map(({_id, name, imageURL}) => (
            <Grid item>
              <Link to={`/read/${_id}`} style={{textDecoration: "none"}}>
                <div className="card-image-container">
                  <img className="media" src={imageURL} alt={name} />
                </div>

                <div className="recipe-title">
                  <h2>{name}</h2>
                </div>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </div>
  );
}
