import React, {Component} from "react";
import axios from "axios";
import {makeStyles} from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import {Input, FormControl, OutlinedInput, InputLabel} from "@material-ui/core";
import {Link} from "react-router-dom";
import "./update.scss";

import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";

class Update extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipe: {}
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    axios.get("/recipe/" + this.props.match.params.id).then(res => {
      this.setState({recipe: res.data});
    });
  }

  handleChange(event) {
    const state = this.state.recipe;
    state[event.target.name] = event.target.value;
    this.setState({recipe: state});
  }

  handleSubmit(event) {
    const {
      name,
      imageURL,
      description,
      ingredients,
      method,
      notes
    } = this.state.recipe;

    axios
      .put("/recipe/" + this.props.match.params.id, {
        name,
        imageURL,
        description,
        ingredients,
        method,
        notes
      })
      .then(result => {
        this.props.history.push("/read/" + this.props.match.params.id);
      });
    event.preventDefault();
  }

  render() {
    return (
      <div className="form-container">
        <div>
          <h2>Editing {this.state.recipe.name}</h2>
        </div>

        <form onSubmit={this.handleSubmit} noValidate autoComplete="off">
          <div>
            <TextField
              margin="normal"
              label="Name"
              variant="outlined"
              type="text"
              name="name"
              defaultValue=" "
              value={this.state.recipe.name}
              onChange={this.handleChange}
            />
            <TextField
              margin="normal"
              label="Image Url"
              fullWidth
              variant="outlined"
              type="text"
              name="imageURL"
              defaultValue=" "
              value={this.state.recipe.imageURL}
              onChange={this.handleChange}
            />
            <TextField
              margin="normal"
              fullWidth
              label="Description"
              type="text"
              name="description"
              multiline
              rows={3}
              variant="outlined"
              defaultValue=" "
              value={this.state.recipe.description}
              onChange={this.handleChange}
            />
            <TextField
              margin="normal"
              fullWidth
              label="Ingredients"
              type="text"
              name="ingredients"
              multiline
              rows={20}
              variant="outlined"
              defaultValue=" "
              value={this.state.recipe.ingredients}
              onChange={this.handleChange}
            />
            <TextField
              margin="normal"
              fullWidth
              label="Method"
              type="text"
              name="method"
              multiline
              rows={20}
              variant="outlined"
              defaultValue=" "
              value={this.state.recipe.method}
              onChange={this.handleChange}
            />
            <TextField
              margin="normal"
              fullWidth
              label="Notes"
              type="text"
              name="notes"
              multiline
              rows={10}
              variant="outlined"
              defaultValue=" "
              value={this.state.recipe.notes}
              onChange={this.handleChange}
            />

            <div className="button-bar">
              <Button variant="text" color="secondary">
                Delete
              </Button>

              <ButtonGroup
                className="submit-btn-group"
                variant="text"
                color="primary"
                aria-label="text primary button group"
              >
                <Button type="submit" value="Submit">
                  Update
                </Button>

                <Button
                  color="primary"
                  onClick={() =>
                    this.props.history.push(
                      "/read/" + this.props.match.params.id
                    )
                  }
                >
                  Cancel
                </Button>
              </ButtonGroup>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Update;
