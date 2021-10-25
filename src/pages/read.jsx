import React, {Component} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Container from "@material-ui/core/Container";

import Banner from "../components/banner.component";

import "./read.scss";

class Read extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipe: []
    };
  }

  componentDidMount() {
    axios.get("/recipe/" + this.props.match.params.id).then(res => {
      this.setState({recipe: res.data});
    });
  }

  removeRecipe() {
    axios.delete("/recipe/" + this.props.match.params.id).then(res => {
      this.props.history.push("/");
    });
  }

  render() {
    return (
      <div>
        <div>
          <Banner name={this.state.recipe.name} />
        </div>
        <Container maxWidth="lg">
          <div class="read-container">
            <div class="page-header">
              <p className="description">{this.state.recipe.description}</p>
            </div>
            <div class="read-banner">
              <img
                className="read-image"
                src={this.state.recipe.imageURL}
                alt={this.state.recipe.name}
              />
            </div>

            <div className="whitespace">
              <div className="read-container-fluid">
                <div className="ingredients-container">
                  <h3>Ingredients</h3>

                  <Divider />

                  <p className="read-paragraph">
                    {this.state.recipe.ingredients}
                  </p>
                </div>
                <div className="ingredients-container">
                  <h3>Method</h3>
                  <Divider />
                  <p className="read-paragraph">{this.state.recipe.method}</p>
                </div>
              </div>

              <h3>Notes:</h3>
              <Divider />
              <p className="read-paragraph">{this.state.recipe.notes}</p>
            </div>

            <div className="read-button-bar">
              <ButtonGroup
                variant="text"
                color="primary"
                aria-label="text primary button group"
              >
                <Link to={`/update/${this.state.recipe._id}`}>
                  <Button color="primary">Edit</Button>
                </Link>
                <Link id="link" to="/">
                  <Button color="primary">Home</Button>
                </Link>
              </ButtonGroup>
            </div>
            {/* <div><button type="submit" onClick={this.removeRecipe.bind(this, this.state.recipe.id)}>Delete</button></div> */}
          </div>
        </Container>
      </div>
    );
  }
}
export default Read;
