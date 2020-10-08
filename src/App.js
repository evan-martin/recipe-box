import React, { Component } from 'react';
import axios from 'axios'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import './App.css';

import Homepage from './pages/homepage'
import Create from './pages/create'

import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import { ReactComponent as ShoppingIcon } from './assets/recipe-box-icon.svg';
import MenuIcon from '@material-ui/icons/Menu';

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
    <BrowserRouter>
    <div>
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
      
      <Paper >
      <div id='header'>
      <Link to='/' id='link'> <h1>Recipe Box</h1></Link>

        <ShoppingIcon className='recipe-box-icon'/>
        <MenuIcon className='menu-icon' />
      </div>
      <div>
      <Divider variant="middle"  />
      </div>


        <div>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/create' component={Create} />
        </div>



      </Paper> 
      </Container>
    </React.Fragment>

   
    </div>
    </BrowserRouter>
  );
}
}

export default App;
