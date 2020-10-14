import React, {Component} from "react";
import axios from "axios";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";

import "./create.scss";

class Create extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
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
      imageURL,
      description,
      ingredients,
      method,
      notes
    } = this.state;

    axios
      .post("/recipe", {
        name,
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
    const isEnabled = this.canSubmit();
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
                variant="text"
                color="primary"
                aria-label="text primary button group"
              >
                <Button type="submit" value="Submit">
                  Submit
                </Button>

                <Button onClick={() => this.props.history.push("/")}>
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
export default Create;
