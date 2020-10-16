import React, {Component} from "react";
import {BrowserRouter, Route} from "react-router-dom";

import Homepage from "./pages/homepage";
import Create from "./pages/create";
import Read from "./pages/read";
import Update from "./pages/update";
import Header from "./components/header.component.jsx";
import About from "./pages/about.jsx";
import ScrollToTop from "./components/top-scroll.jsx";

import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";

import "./App.scss";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <ScrollToTop />
        <div>
          <React.Fragment>
            <CssBaseline />
            <Header />
            <Container maxWidth="lg">
            
                
                <div>
                  <Divider variant="middle" />
                </div>
                <div>
                  <Route exact path="/" component={Homepage} />
                  <Route path="/create" component={Create} />
                  <Route path="/read/:id" component={Read} />
                  <Route path="/update/:id" component={Update} />
                  <Route path="/about" component={About} />
                </div>
             
            </Container>
          </React.Fragment>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
