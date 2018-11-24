import React, { Component } from "react";
import AnimatedSquare from "../components/square.jsx";

class Trash extends Component {
  state = {};
  render() {
    return (
      <div className="row trash-content section">
        <div className="col-sm-7 offset-sm-5 intro" id="trash-intro">
          <h1>Reduce Waste</h1>
          <p>
            The cat, often referred to as the domestic cat to distinguish from
            other felids and felines, is a small, typically furry, carnivorous
            mammal. It is often called house cat when kept as indoor pet or
            feral/feral domestic cat when wild. It is often valued by humans for
            companionship and for its ability to hunt vermin
          </p>
        </div>
        <div className="col-sm-12 tip-content">
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

export default Trash;
