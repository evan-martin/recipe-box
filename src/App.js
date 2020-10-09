import React, {Component} from "react";
import axios from "axios";
import {BrowserRouter, Route, Link} from "react-router-dom";
import "./App.scss";

import Homepage from "./pages/homepage";
import Create from "./pages/create";
import Read from "./pages/read"
import Update from "./pages/update"

import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import {ReactComponent as ShoppingIcon} from "./assets/recipe-box-icon.svg";
import MenuIcon from "@material-ui/icons/Menu";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: []
    };
  }

  componentDidMount() {
    axios.get("/recipe").then(res => {
      this.setState({recipes: res.data});
    });
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <React.Fragment>
            <CssBaseline />
            <Container maxWidth="lg">
              <Paper>
                <div id="header">
                  <Link to="/" style={{textDecoration: "none"}}>
                    {" "}
                    <h1>Recipe Box</h1>
                  </Link>

                  <ShoppingIcon className="recipe-box-icon" />
                </div>
                <div>
                  <Divider variant="middle" />
                </div>

                <div>
                  <Route
                    exact
                    path="/"
                    render={() => <Homepage recipes={this.state.recipes} />}
                  />
                  <Route path="/create" component={Create} />
                  <Route path='/read/:id' component={Read} />
                  <Route path='/update/:id' component={Update} />
                </div>
              </Paper>
            </Container>
          </React.Fragment>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
