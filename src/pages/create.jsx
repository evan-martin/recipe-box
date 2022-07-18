import React, { Component } from "react";
import axios from "axios";

import TextField from "@material-ui/core/TextField";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { MenuItem } from "@material-ui/core";

import "./create.scss";

class Create extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      category: "",
      imageURL: "",
      description: "",
      ingredients: "",
      method: "",
      notes: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const state = this.state;
    state[event.target.name] = event.target.value;
    this.setState(state);
  }

  canSubmit() {
    const name = this.state.name;
    return name.length > 0;
  }

  handleSubmit(event) {
    if (!this.canSubmit()) {
      event.preventDefault();
      return;
    }

    const {
      name,
      category,
      imageURL,
      description,
      ingredients,
      method,
      notes
    } = this.state;

    axios
      .post("https://recipe-box-master-api.herokuapp.com/", {
        name,
        category,
        imageURL,
        description,
        ingredients,
        method,
        notes
      })
      .then(result => {
        this.props.history.push("/");
      });
    event.preventDefault();
  }

  render() {
    return (
      <div className="form-container">
        <div>
          <h2>New Recipe</h2>
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
              value={this.state.name}
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
              value={this.state.imageURL}
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
              value={this.state.description}
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
              value={this.state.ingredients}
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
              value={this.state.method}
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
              value={this.state.notes}
              onChange={this.handleChange}
            />

            <div className="submit-button-bar">
              <ButtonGroup
                className="submit-btn-group"
                variant="contained"
                aria-label="text primary button group"
              >
                <Button color="secondary" onClick={() => this.props.history.push("/")}>
                  Cancel
                </Button>
                <Button type="submit" value="Submit">
                  Submit
                </Button>
              </ButtonGroup>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
export default Create;
