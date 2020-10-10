import React, {Component} from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import "./read.scss";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Typography from "@material-ui/core/Typography";

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
      <div class="read-container">
        <div class="page-header">
        <Typography variant="h4" color="textPrimary" >
          {this.state.recipe.name}
          </Typography>
        </div>
        <div class="read-banner">
          <img className="read-image" src={this.state.recipe.imageURL} />
        </div>

        <div className="whitespace">
        <Typography variant="h5" color="textPrimary" >
          Ingredients
          </Typography>
          <Typography className="read-paragraph" variant="body1" color="textPrimary" component="p">
          {this.state.recipe.ingredients}
          </Typography>

          <h3>Method</h3>
          <Typography className="read-paragraph" variant="body1" color="textPrimary" component="p">
          {this.state.recipe.method}
          </Typography>
          <h3>Notes:</h3>
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
    );
  }
}
export default Read;
