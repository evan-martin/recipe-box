import React, {Component} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Tooltip from "@material-ui/core/Tooltip";
import SearchIcon from "@material-ui/icons/Search";
import SpacingGrid from "../components/card-grid.component.jsx";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import Banner from "../components/banner.component.jsx";
import Container from "@material-ui/core/Container";
import ScrollToTop from "../components/top-scroll.jsx";

import "./homepage.scss";

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
        <div className="banner">
          <Banner name="Explore" />
        </div>
        <Container maxWidth="lg">
          <div className="search-bar">
            <TextField
              placeholder="Search by name!"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                )
              }}
              variant="outlined"
              size="small"
              type="search"
              onChange={e => this.setState({searchTerm: e.target.value})}
            />
          </div>

          <SpacingGrid recipes={filteredRecipes} />

          <div className="footer">
            <Tooltip title="Add New Recipe!">
              <Link to="/create" className="new-recipe-button">
                <Fab color="primary">
                  <AddIcon />
                </Fab>
              </Link>
            </Tooltip>
          </div>
        </Container>
      </div>
    );
  }
}

export default Homepage;
