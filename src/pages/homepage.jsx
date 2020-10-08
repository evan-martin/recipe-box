import React from 'react';
import './homepage.scss'; 
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';

import RecipeReviewCard from '../components/card.component'




export default function Homepage() {


  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
      
      <Paper >
      <div id='header'>
        <h1>Recipe Box</h1>
      <Divider variant="middle"  />
      </div>

      <div id='card-grid'>
        <RecipeReviewCard />
        <RecipeReviewCard />
        <RecipeReviewCard />
        <RecipeReviewCard />
        <RecipeReviewCard />
        <RecipeReviewCard />
      </div>


      </Paper> 
      </Container>
    </React.Fragment>
  );
}