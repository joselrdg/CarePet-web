import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";



const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function CardBreed({raza,comportamiento, utilizado,historia, img}) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  let breed = ''
  if (raza[1]) {
    let name = raza[1].charAt(0).toUpperCase() + raza[1].toLowerCase().slice(1);
    breed = (name)
  } else {
    let name = raza[0].charAt(0).toUpperCase() + raza[0].toLowerCase().slice(1);
    breed = (name)
  }

  
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  
  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar alt="Remy Sharp" src='../descarga.jpg' />
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={breed}
        subheader="September 14, 2016"
      />
      <CardMedia
        className={classes.media}
        image='../descarga.jpg'
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {comportamiento[0] ? comportamiento : utilizado}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Historia:</Typography>
          <Typography paragraph>
            {historia}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
