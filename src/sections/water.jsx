import React, { Component } from "react";
import AnimatedSquare from "../components/square.jsx";
class Water extends Component {
  state = {};
  render() {
    return (
      <div className="row">
        {/* <div className="col-sm-4">haha</div> */}
        <div className="col-sm-12 water">
          <div className="square">
            <AnimatedSquare />
            <AnimatedSquare />
            <AnimatedSquare />
          </div>
        </div>
      </div>
    );
  }
}

export default Water;
