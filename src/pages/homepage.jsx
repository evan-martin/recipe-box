import React from 'react';
import './homepage.scss'; 
import { Link } from 'react-router-dom'

import RecipeReviewCard from '../components/card.component'


import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';


export default function Homepage() {


  return (
<div>
      <div id='card-grid'>
        <RecipeReviewCard />
        <RecipeReviewCard />
        <RecipeReviewCard />
        <RecipeReviewCard />
        <RecipeReviewCard />
        <RecipeReviewCard />
      </div>

      <div>
      <Fab >
      <Link to='/create' id='link'><AddIcon  /></Link> 
      </Fab>
      </div>
      </div>
  );
}