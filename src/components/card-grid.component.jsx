import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

import Grid from "@material-ui/core/Grid";

import defaultRecipeImage from "../assets/default1.jpg";

import "./card-grid.styles.scss";

export default function SpacingGrid({ recipes }) {

  const checkImageURL = (imageURL) => {
    if (!imageURL) {
      return defaultRecipeImage
    } else return imageURL
  };

  return (
    <Grid container spacing={3} className="grid">
      {recipes.map(({ _id, name, imageURL }) => (
        <Grid item>
          <div className="grid-item">
            <HashLink to={`/read/${_id}#top`} style={{ textDecoration: "none" }}>
              <div className="card-image-container">
                <img className="media" src={checkImageURL(imageURL)} alt={name} />
              </div>
              <div className="recipe-title">
                <h3>{name}</h3>
              </div>
            </HashLink>
          </div>
        </Grid>
      ))}
    </Grid>
  );
}
