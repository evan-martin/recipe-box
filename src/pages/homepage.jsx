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
    axios.get("/recipe").then(res => {
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
          <Banner name="Explore" category={filterTerm}/>
        </div>

        <Container maxWidth="lg">

          {/* <div className="category-bar">

        <div onClick={() => this.setCategory("")} className="avatar">
        <img alt="all" src="https://media3.s-nbcnews.com/i/newscms/2019_05/2736521/190131-stock-taco-bar-food-ew-1220p_bc7c9fc25ecd393bfa3d7d35f216edfc.jpg" />
        <p>All</p>
        </div>

        <div className="avatar" onClick={() => this.setCategory("pasta")}>
          <img alt="pasta" src="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/1._different_types_of_pasta-21a5324.jpg?quality=90&resize=768,574" />
          <p>Pasta/Noodles</p>
          </div>

          <div onClick={() => this.setCategory("chicken")} className="avatar">
        <img alt="all" src="https://www.simplyrecipes.com/wp-content/uploads/2019/03/HT-Make-Roast-Chicken-LEAD-5v2.jpg" />
        <p> Chicken</p>
        </div>

        <div onClick={() => this.setCategory("beef")} className="avatar">
        <img alt="all" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQuGg1-YRHK8jjfXCFKEhBmS4PDRtXUm4HqQA&usqp=CAU" />
        <p> Beef</p>
        </div>

        <div onClick={() => this.setCategory("pork")} className="avatar">
        <img alt="all" src="https://www.blaussaukvillemeats.com/wp-content/uploads/2019/08/Grilled-Pork-Roast-Saukville-Meats.jpg" />
        <p> Pork</p>
        </div>

        <div onClick={() => this.setCategory("soup")} className="avatar">
        <img alt="all" src="https://images.themodernproper.com/billowy-turkey/production/posts/2019/Hungarian-Mushroom-Soup-6.jpg?w=1200&auto=compress%2Cformat&fit=crop&fp-x=0.5&fp-y=0.5&crop=focalpoint&s=9d08524f42f1faadf45537e046a72c16" />
        <p> Soups/Stews </p>
        </div>

        <div onClick={() => this.setCategory("breakfast")} className="avatar">
        <img alt="all" src="https://www.eggs.ca/assets/RecipePhotos/Fluffy-Pancakes-New-CMS.jpg" />
        <p> Breakfast/Brunch </p>
        </div>

        <div onClick={() => this.setCategory("grilling")} className="avatar">
        <img alt="all" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSy7-HUdjvFW_427NBmFH_K-BGYSDxZos6R4w&usqp=CAU" />
        <p> Grilling/Smoking </p>
        </div>

        <div onClick={() => this.setCategory("dessert")} className="avatar">
        <img alt="all" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRisbqa1LmAVJXtlxk6-8kls6dxvQvxOvzQ6w&usqp=CAU" />
        <p> Dessert </p>
        </div>

        <div onClick={() => this.setCategory("baking")} className="avatar">
        <img alt="all" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR5_HSaZHbWv0QGb1sSujUTjGlEbLEaJCTXcg&usqp=CAU" />
        <p> Baking </p>
        </div>

        <div onClick={() => this.setCategory("rice")} className="avatar">
        <img alt="all" src="https://www.thespruceeats.com/thmb/ubqzuOrew468AJJtvFRJqFrZ2C4=/4288x2412/smart/filters:no_upscale()/how-to-make-basic-white-rice-2355883-10-5b0da96eba6177003622896e.jpg" />
        <p> Rice/Grains </p>
        </div>

        <div onClick={() => this.setCategory("booze")} className="avatar">
        <img alt="all" src="https://images.theconversation.com/files/208587/original/file-20180302-152555-1nmke4u.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=675.0&fit=crop" />
        <p> Booze </p>
      </div>

          </div> */}
      



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
