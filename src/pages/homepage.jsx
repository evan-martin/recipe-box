import React from "react";
import "./homepage.scss";
import {Link} from "react-router-dom";

import RecipeReviewCard from "../components/card.component";

import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";

export default function Homepage({recipes}) {
  return (
    (
      <div>
        <div id="card-grid">
          {recipes.map(({id, ...otherSectionProps}) => (
            <RecipeReviewCard key={id} {...otherSectionProps} />
          ))}
        </div>

        <div>
          <Link to="/create" id="link">
            <Fab>
              <AddIcon />
            </Fab>
          </Link>
        </div>
      </div>
    )
  );
}
