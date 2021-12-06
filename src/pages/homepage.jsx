import React, { Component } from "react";
import axios from "axios";

import SearchIcon from "@material-ui/icons/Search";
import SpacingGrid from "../components/card-grid.component.jsx";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import Banner from "../components/banner.component.jsx";
import Container from "@material-ui/core/Container";
import MenuItem from '@material-ui/core/MenuItem';
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

import SideButtonGroup from "../components/side-btn-group.component.jsx";

import "./homepage.scss";

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [],
      searchTerm: "",
      filterTerm: "",
      loading: true,
      dbfail: false,
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
      this.setState({ recipes: res.data, loading: false });

    })
      .catch(error => {
        console.log(error)
        this.setState({ dbfail: true, loading:false })
      })
  }

  render() {
    const { recipes, searchTerm, filterTerm } = this.state;
    recipes.reverse();
    const filteredRecipes = recipes.filter(recipe =>
      recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
      && recipe.category.toLowerCase().includes(filterTerm.toLowerCase())
    );

    let content;

    if (this.state.loading) {
      content = <Box sx={{ display: "flex", justifyContent: "center", height: '100vh'}}>
        <CircularProgress size='17em' />
      </Box>
    }
    else if (this.state.dbfail) {
      content = <div className="fail-message"> Database failed to load, check the console for error message. </div>
    }
    else {
      content = <SpacingGrid recipes={filteredRecipes} />
    }

    return (

      <div>
        <div className="banner">
          <Banner name="Recipes" category={filterTerm} />
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
                onChange={e => this.setState({ searchTerm: e.target.value })}
              />
            </div>

            <div className="category-bar">
              <TextField
                select
                label="Categories"
                variant="outlined"
                size="small"
                helperText="Browse recipes by category"
                onChange={e => this.setState({ filterTerm: e.target.value })}
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


          {content}



        </Container>
        <div className="fab-container">
          <SideButtonGroup />
        </div>

      </div>
    );
  }
}

export default Homepage;
