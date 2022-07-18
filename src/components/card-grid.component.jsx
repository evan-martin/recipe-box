import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

import defaultRecipeImage from "../assets/default1.jpg";

import "./card-grid.styles.scss";

export default function SpacingGrid({ recipes }) {

  const checkImageURL = (imageURL) => {
    if (!imageURL) {
      return defaultRecipeImage
    } else return imageURL
  };

  return (
    <div className="grid">
      {recipes.map(({ _id, name, imageURL }) => (
        <div className="grid-item">
          <HashLink to={`/read/${_id}#top`} style={{ textDecoration: "none" }}>
            <img className="media" src={checkImageURL(imageURL)} alt={name} />
            <p>{name}</p>
          </HashLink>
        </div>
      ))}
    </div>
  );
}
