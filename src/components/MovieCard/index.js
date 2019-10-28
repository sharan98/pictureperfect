import React from "react";
import Card from "@material-ui/core/Card";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Rating from "@material-ui/lab/Rating";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";
import { maxHeight } from "@material-ui/system";

const useStyles = makeStyles({
  card: {
    maxWidth: 200,
    maxHeight: 345,
    minWidth: 100,
    minHeight: 140
  }
});

export default function MovieCard(props) {
  const classes = useStyles();
  const { img, alt, title, rating } = props;

  return (
    <div align="center" margin="200px">
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt={alt}
            image={img}
            title={title}
            height="140"
          />
        </CardActionArea>
      </Card>
      <Typography variant="h7">{title}</Typography>
      <br />
      <Rating value={rating} readOnly size="small" />
    </div>
  );
}
