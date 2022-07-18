import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Homepage from "./pages/homepage";
import Create from "./pages/create";
import Read from "./pages/read";
import Update from "./pages/update";
import Header from "./components/header.component.jsx";
import About from "./pages/about.jsx";
import Footer from "./components/footer.component"
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";

import "./app.scss"

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <CssBaseline />
        <Header />
        <div className='app-container'>
          <Route exact path="/" component={Homepage} />
          <Route path="/read/:id" component={Read} />
          <Container maxWidth="lg">
            <Route path="/create" component={Create} />
            <Route path="/update/:id" component={Update} />
            <Route path="/about" component={About} />
          </Container>
          <Footer />
        </div>
      </BrowserRouter >
    );
  }
}

export default App;
