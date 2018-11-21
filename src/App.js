import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Earth from "./components/earth";
import Text from "./components/title";
import Water from "./sections/water";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="row">
          <div className="col-sm-6" id="earth_area">
            <Earth />
          </div>
          <div className="col-sm-6" id="earth_area">
            <Text />
          </div>
        </div>
        <Water />
      </div>
    );
  }
}

export default App;
