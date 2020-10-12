import React from "react";
import {Link} from "react-router-dom";
import {makeStyles} from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";

import "./card.styles.scss";

const useStyles = makeStyles(theme => ({
  root: {
    minHeight: 325,
    maxWidth: 325,
    minWidth: 325,
    marginBottom: "3em"
  },
  media: {
    height: 0,
    paddingTop: "56.25%"
    // 16:9
  }
}));

export default function RecipeReviewCard({_id, name, imageURL, description}) {
  const classes = useStyles();

  return (
    <div className="card-component">
      <Link to={`/read/${_id}`} style={{textDecoration: "none"}}>
        <Card className={classes.root}>
          <div className="card-image">
            <CardMedia className={classes.media} image={imageURL} />
          </div>
          <div className="recipe-name">
            <h2>{name} </h2>
          </div>
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              {description}
            </Typography>
          </CardContent>
        </Card>
      </Link>
    </div>
  );
}
