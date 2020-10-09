import React, {Component} from "react";
import axios from "axios";
import {Link} from "react-router-dom";
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
      <div id="back" class="container">
        <div class="page-header">
          <h2 id="head">New Recipe</h2>
        </div>
        <form onSubmit={this.handleSubmit}>
          <div class="form-group">
            <label id="top" for="text">
              Name:
            </label>
            <input
              class="form-control"
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </div>
          <div class="form-group">
          <label id="top" for="text">
              Image URL:
            </label>
            <input
              class="form-control"
              type="text"
              name="imageURL"
              value={this.state.imageURL}
              onChange={this.handleChange}
            />
          </div> 
          <div class="form-group">
            <label>Description:</label>
            <textarea
              id="large"
              class="form-control"
              name="description"
              value={this.state.description}
              onChange={this.handleChange}
            />
          </div>
          <div class="form-group">
            <label>Ingredients:</label>
            <textarea
              id="large"
              class="form-control"
              name="ingredients"
              value={this.state.ingredients}
              onChange={this.handleChange}
            />
          </div>
          <div class="form-group">
            <label>Method:</label>
            <textarea
              id="large"
              class="form-control"
              name="method"
              value={this.state.method}
              onChange={this.handleChange}
            />
          </div>
          <div class="form-group">
            <label>Notes:</label>
            <textarea
              class="form-control"
              name="notes"
              value={this.state.notes}
              onChange={this.handleChange}
            />
          </div>
          <div class="foot">
            <input disabled={!isEnabled} type="submit" value="Submit" />
            <button type="submit">
              <Link to="/" id="link">
                Cancel
              </Link>
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Create;
