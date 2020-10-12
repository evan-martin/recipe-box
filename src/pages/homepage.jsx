import React, {Component} from "react";
import "./homepage.scss";
import axios from "axios";
import {Link} from "react-router-dom";

import RecipeReviewCard from "../components/card.component";

import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Tooltip from "@material-ui/core/Tooltip";
import SearchIcon from "@material-ui/icons/Search";
import CardList from "../components/card-list.component.jsx"

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [],
      searchTerm: ""
    };
  }

  componentDidMount() {
    axios.get("/recipe").then(res => {
      this.setState({recipes: res.data});
    });
  }

  render() {
    const {recipes, searchTerm} = this.state;
    const filteredRecipes = recipes.filter(recipe =>
      recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return (
      <div>
        <div className="search-bar">
          <SearchIcon />
          <input
            type="text"
            placeholder="Search by name!"
            onChange={e=> this.setState({ searchTerm: e.target.value })}
          />
        </div>
        <CardList recipes={filteredRecipes} />

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
}

export default Homepage;
