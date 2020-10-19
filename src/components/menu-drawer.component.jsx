import React from "react";
import clsx from "clsx";
import {makeStyles, useTheme} from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import CssBaseline from "@material-ui/core/CssBaseline";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";

import {ReactComponent as ShoppingIcon} from "../assets/recipe-box-icon.svg";

import { Link } from "react-router-dom"

import "./menu-drawer.styles.scss";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginRight: drawerWidth
  },
  menuTitle: {
    flexGrow: 1
  },
  hide: {
    display: "none"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: "black",
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-start"
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginRight: -drawerWidth
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginRight: 0
  }
}));

export default function PersistentDrawerRight() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        style={{background: "black"}}
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open
        })}
      >
        <Toolbar id="header">
          <div className='recipe-box-name'>
          <Link className="link" to="/" style={{textDecoration: "none"}}>
            
          <h1 >
            Recipe Box
          </h1>
          </Link>
         
            <ShoppingIcon className="recipe-box-icon" />

          </div>
          

          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerOpen}
            className={clsx(open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="right"
        open={open}
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <div className={classes.drawerHeader} onClick={handleDrawerClose} style={{cursor: "pointer"}}>
          <IconButton style={{color: "white"}} >
            {theme.direction === "rtl" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>

        <Link className="link" to="/" style={{textDecoration: "none"}}>
            <ListItem button >
              <ListItemText primary={"Home"} style={{color: "white"}} />
            </ListItem>
            </Link>

            <Link className="link" to="/create" style={{textDecoration: "none"}}>
            <ListItem button >
              <ListItemText primary={"New Recipe"} style={{color: "white"}}/>
            </ListItem>
            </Link>

            <Link className="link" to="/about" style={{textDecoration: "none"}}>
            <ListItem button >
              <ListItemText primary={"About"} style={{color: "white"}}/>
            </ListItem>

            </Link> 

            <a
          href="https://github.com/evan-martin/recipe-box"
          style={{textDecoration: "none"}}
          target="_blank"
        >
            <ListItem button >
              <ListItemText primary={"GitHub"} style={{color: "white"}}/>
            </ListItem>
            </a>

        </List>
      </Drawer>
    </div>
  );
}
