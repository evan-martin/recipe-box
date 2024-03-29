import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
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
      sx={{ width: 250, backgroundColor: "#1e1e1e", height: '100%' }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem button >
        </ListItem>
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
          rel="noopener">
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
              <MenuIcon sx={{ fontSize: 30 }}/>
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