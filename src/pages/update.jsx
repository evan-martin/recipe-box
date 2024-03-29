import React, { Component } from "react";
import axios from "axios";

import TextField from "@material-ui/core/TextField";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { MenuItem } from "@material-ui/core";

import "./update.scss";

class Update extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipe: {}
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    axios.get("https://recipe-box-master-api.herokuapp.com/" + this.props.match.params.id).then(res => {
      this.setState({ recipe: res.data });
    });
  }

  handleChange(event) {
    const state = this.state.recipe;
    state[event.target.name] = event.target.value;
    this.setState({ recipe: state });
  }

  handleDelete() {
    axios
      .delete("https://recipe-box-master-api.herokuapp.com/" + this.props.match.params.id)
      .then(() => {
        this.props.history.push("/");
      });
  }

  handleSubmit(event) {
    const {
      name,
      category,
      imageURL,
      description,
      ingredients,
      method,
      notes
    } = this.state.recipe;

    axios
      .put("https://recipe-box-master-api.herokuapp.com/" + this.props.match.params.id, {
        name,
        category,
        imageURL,
        description,
        ingredients,
        method,
        notes
      })
      .then(() => {
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

            <div className="category-bar">
              <TextField
                select
                label="Category"
                variant="outlined"
                size="medium"
                helperText="Select a category"
                onChange={this.handleChange}
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

            <div className="update-button-bar">
              <Button variant="contained" color="error" onClick={this.handleDelete}>
                Delete
              </Button>

              <ButtonGroup
                variant="contained"
                aria-label="text primary button group"
              >
                <Button
                  color="secondary"
                  onClick={() =>
                    this.props.history.push(
                      "/read/" + this.props.match.params.id
                    )
                  }
                >
                  Cancel
                </Button>

                <Button type="submit" value="Submit">
                  Update
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
