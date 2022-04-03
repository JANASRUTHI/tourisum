import React, { Component } from "react";
import "./Apps.css";
//import { Router, Link } from "@reach/router";
import { BrowserRouter as Router } from "react-router-dom";
//import { Routes } from "react-router-dom";
import NavbarMain from "./Navbar";
import Home from "./Home";
import Tour from "./Tour";

class App extends Component {
  render() {
    return (
      <body>
      <div className="App">
        <NavbarMain />
        <Router>
          <Home path="/" />
          <Tour path="tour" />
        </Router>
      </div>
      </body>
    );
  }
}

export default App;