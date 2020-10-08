import React, { Component } from 'react';
import axios from 'axios'
import './App.css';

import Homepage from './pages/homepage'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      recipes: []
    };
  }
  
  componentDidMount() {
    axios.get('/recipe').then(res => {
      this.setState({recipes: res.data});
    })
  }
  
  render(){
  return (
    <div>
      <Homepage />
    </div>
  );
}
}

export default App;
