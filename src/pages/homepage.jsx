import React from "react";
import "./homepage.scss";
import {Link} from "react-router-dom";

import RecipeReviewCard from "../components/card.component";

import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Tooltip from "@material-ui/core/Tooltip";
import SearchIcon from "@material-ui/icons/Search";

export default function Homepage({recipes}) {
  return (
    <div>
      <div className="search-bar">
        <SearchIcon />
        <input type="text" placeholder="Search by name!"
        onChange={e=> console.log(e.target.value)} />
      </div>
      <div id="card-grid">
        {recipes.map(({id, ...otherSectionProps}) => (
          <RecipeReviewCard key={id} {...otherSectionProps} />
        ))}
      </div>

      <div className="footer">
        <Tooltip title="Add New Recipe!">
          <Link to="/create" className="new-recipe-button">
            <Fab color="primary">
              <AddIcon />
            </Fab>
          </Link>
        </Tooltip>
      </div>
    </div>
  );
}
