import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import Divider from "@material-ui/core/Divider";
import Container from "@material-ui/core/Container";


import "./read.scss";

class Read extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipe: []
    };
  }

  componentDidMount() {
    axios.get("https://recipe-box-master-api.herokuapp.com/" + this.props.match.params.id).then(res => {
      this.setState({ recipe: res.data });
    });
  }

  removeRecipe() {
    axios.delete("https://recipe-box-master-api.herokuapp.com/" + this.props.match.params.id).then(res => {
      this.props.history.push("/");
    });
  }

  render() {
    return (
      <Container maxWidth="lg">
        <div class="read-container">
          <div className="read-header-container">
            <div class="read-image-container">
              <img className="read-image"
                src={this.state.recipe.imageURL}
                alt={this.state.recipe.name}
              />
            </div>
            <h2 className="recipe-name">{this.state.recipe.name}</h2>
          </div>
          <div className="ingredient-method-container">
            <div className="ingredients-container">
              <h3 className="ingredients-heading">Ingredients</h3>
              <Divider />
              <p className="ingredients-content">
                {this.state.recipe.ingredients}
              </p>
            </div>
            <div className="method-container">
              <h3 className="method-heading">Method</h3>
              <Divider />
              <p className="method-content">{this.state.recipe.method}</p>
            </div>
          </div>
          <div className="notes-container">
            <h3>Notes:</h3>
            <Divider />
            <p className="notes">{this.state.recipe.notes}</p>
          </div>
          <div className="read-button-bar">
            <Link to={`/update/${this.state.recipe._id}`}>
              <Button variant="contained" color="secondary">Edit</Button>
            </Link>
            <Link to="/">
              <Button variant="contained" color="primary">Back</Button>
            </Link>
          </div>
        </div>
      </Container>
    );
  }
}

export default Read;
