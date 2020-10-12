import React from "react"
import RecipeReviewCard from "./card.component.jsx"


export default function CardList({recipes}) {

  return(
    <div id="card-grid">
      {recipes.map(({id, ...otherSectionProps}) => (
        <RecipeReviewCard key={id} {...otherSectionProps} />
      ))}
    </div>
  )
}
