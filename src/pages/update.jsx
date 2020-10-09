import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'
import './update.scss';

class Update extends Component{

  constructor(props){
    super(props);
    this.state = {
      recipe: {}
    };

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
    axios.get('/recipe/'+this.props.match.params.id).then(res => {
      this.setState({recipe: res.data});
    })
  }

  handleChange(event) {
      const state = this.state.recipe
      state[event.target.name] = event.target.value;
      this.setState({recipe: state});
    }

  handleSubmit(event) {

    const { name, imageURL, description, ingredients, method, notes } = this.state.recipe;

    axios.put('/recipe/'+ this.props.match.params.id, { name, imageURL, description, ingredients, method, notes })
      .then((result) => {
        this.props.history.push("/read/"+this.props.match.params.id)
      })
          event.preventDefault();
    }

  render() {
    return (
      <div id="back" class="container">
          <div class="page-header">
            <h2 id="head">Edit Recipe</h2>
          </div>
        <form onSubmit={this.handleSubmit}>
          <div class="form-group">
            <label id="top" for="text">Name:</label>
            <input class="form-control" type="text" name ='name' value={this.state.recipe.name} onChange={this.handleChange} />
          </div>
          <div class="form-group">
          <label id="top" for="text">
              Image URL:
            </label>
            <input
              class="form-control"
              type="text"
              name="imageURL"
              value={this.state.recipe.imageURL}
              onChange={this.handleChange}
            />
          </div> 
          <div class="form-group">
            <label>Description:</label>
            <textarea
              id="large"
              class="form-control"
              name="description"
              value={this.state.recipe.description}
              onChange={this.handleChange}
            />
          </div>
          <div class="form-group">
            <label>Ingredients:</label>
            <textarea id="large" class="form-control" name = 'ingredients' value={this.state.recipe.ingredients} onChange={this.handleChange} />
          </div>
          <div class="form-group">
            <label>Method:</label>
            <textarea id="large" class="form-control" name ='method' value={this.state.recipe.method} onChange={this.handleChange} />
          </div>
          <div class="form-group">
            <label>Notes:</label>
            <textarea class="form-control" name ='notes' value={this.state.recipe.notes} onChange={this.handleChange} />
          </div>
          <div class="foot">
          <input type="submit" value="Submit" />
          <button type="submit"><Link to='/' id='link'>Cancel</Link></button>
        </div>
        </form>
      </div>
      );
  }
}

export default Update;
