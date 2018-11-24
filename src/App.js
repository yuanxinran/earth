import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import EarthContainer from "./components/earth";
import Text from "./components/title";
import Water from "./sections/water";
import Trash from "./sections/trash";
import Tree from "./sections/tree";
import Plx from "react-plx";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="row">
          <div className="title-area">
            <Text />
          </div>
          <div>
            <EarthContainer />
          </div>
        </div>
        <Water />
        <Tree />
        <Trash />
      </div>
    );
  }
}

export default App;
