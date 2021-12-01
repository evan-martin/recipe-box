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
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';

import Box from '@material-ui/core/Box';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


import "./homepage.scss";

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [],
      searchTerm: "",
      filterTerm: ""
    };

    this.setCategory = this.setCategory.bind(this);
  }

  setCategory(category) {
    this.setState({
      filterTerm: category
    });
  }

  componentDidMount() {
    axios.get("https://recipe-box-master-api.herokuapp.com/recipe").then(res => {
      this.setState({recipes: res.data});
    });
  }

  


  render() {
    const {recipes, searchTerm, filterTerm} = this.state;
    recipes.reverse();
    const filteredRecipes = recipes.filter(recipe =>
      recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
      && recipe.category.toLowerCase().includes(filterTerm.toLowerCase())
    );


  
    return (

      <div>
        <div className="banner">
          <Banner name="Recipes" category={filterTerm}/>
        </div>

        <Container maxWidth="lg">

         
          <div className="filter-bar">
          <div className="search-bar">
            <TextField
              placeholder="Search by name"
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

          <div className="category-bar">
            <TextField
              select
              label="Categories"
              variant="outlined"
              size="small"
              helperText="Browse recipes by category"
              onChange={e => this.setState({filterTerm: e.target.value})}
            >
            <MenuItem value="" ><em>All</em></MenuItem>
            <MenuItem value="pasta" >Pasta</MenuItem>
            <MenuItem value="chicken" >Chicken</MenuItem>
            <MenuItem value="soup" >Soup</MenuItem>
            <MenuItem value="rice" >Rice & Grains</MenuItem>
            <MenuItem value="baking" >Bread & Baking</MenuItem>
            <MenuItem value="booze" >Booze</MenuItem>
            <MenuItem value="dessert" >Dessert</MenuItem>

            </TextField>
          </div>
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
