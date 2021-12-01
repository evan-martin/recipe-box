import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { Link } from "react-router-dom"

export default function SwipeableTemporaryDrawer() {
  const [state, setState] = React.useState({
    right: false,
  });

  const theme = createTheme({
    palette: {
      secondary: {
        main: '#FFFFFF'
      }
    }
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: 250, backgroundColor: "black", height: '100%' }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <Link className="link" to="/" style={{ textDecoration: "none" }}>
          <ListItem button >
            <ListItemText primary={"Home"} style={{ color: "white" }} />
          </ListItem>
        </Link>

        <Link className="link" to="/create" style={{ textDecoration: "none" }}>
          <ListItem button >
            <ListItemText primary={"New Recipe"} style={{ color: "white" }} />
          </ListItem>
        </Link>

        <Link className="link" to="/about" style={{ textDecoration: "none" }}>
          <ListItem button >
            <ListItemText primary={"About"} style={{ color: "white" }} />
          </ListItem>

        </Link>

        <a
          href="https://github.com/evan-martin/recipe-box"
          style={{ textDecoration: "none" }}
          target="_blank">
          <ListItem button >
            <ListItemText primary={"GitHub"} style={{ color: "white" }} />
          </ListItem>
        </a>
      </List>
    </Box>
  );

  return (
    <div >
      {['right'].map((anchor) => (
        <React.Fragment key={anchor}>

          <ThemeProvider theme={theme}>

            <Button color="secondary" onClick={toggleDrawer(anchor, true)}>
              <MenuIcon />
            </Button>

          

          <SwipeableDrawer

            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>

          </ThemeProvider>

        </React.Fragment>
      ))}
    </div>
  );
}