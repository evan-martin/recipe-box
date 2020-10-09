import React from "react";
import { Link } from 'react-router-dom';
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
    maxWidth: 345,
    minWidth: 300,
    marginBottom: "2em"
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  }
}));

export default function RecipeReviewCard({name, imageURL, description}) {
  const classes = useStyles();

  return (
    <Link to="" >
    <Card className={classes.root}>
      <CardMedia className={classes.media} image={imageURL} />

      <CardHeader title={name} />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing></CardActions>
    </Card>
    </Link>
  );
}
