import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'
import './read.scss';



class Read extends Component{

  constructor(props){
    super(props);
    this.state = {
      recipe: []
    };
  }

  componentDidMount(){
    axios.get('/recipe/'+this.props.match.params.id).then(res => {
      this.setState({recipe: res.data});
    })
  }

  removeRecipe(){
    axios.delete('/recipe/'+this.props.match.params.id)
    .then(res =>{
      this.props.history.push('/')
    })
  }

  render(){
    return(
      <div class="container">

          <div class="page-header">
            <h2 id="head">{this.state.recipe.name}</h2>
          </div>
          <div id="whitespace">
          <p id="top">{this.state.recipe.ingredients}</p>
          <p>{this.state.recipe.method}</p>
          <h5>Notes:</h5>
          <p>{this.state.recipe.notes}</p>
          </div>
        <div class="btn-group">
        <div><button type="submit"><Link id="link" to={`/update/${this.state.recipe._id}`}>Edit</Link></button></div>
        {/* <div><button type="submit" onClick={this.removeRecipe.bind(this, this.state.recipe.id)}>Delete</button></div> */}
        <div><button type="submit"><Link id="link" to='/'>Back</Link></button></div>
      </div>
      </div>


      );
  }

}
export default Read;
