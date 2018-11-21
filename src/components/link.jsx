import React, { Component } from "react";
import Radium from "radium";

class Link extends Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    var styles = {
      button: {
        fill: "grey",
        ":hover": {
          fill: "black",
          cursor: "pointer"
        }
      }
    };

    return (
      <g>
        <text
          className="menu-text"
          x={this.props.x}
          y={this.props.y}
          key="keyForButton"
          style={[styles.button]}
        >
          <tspan>{this.props.text}</tspan>
        </text>
        {Radium.getState(this.state, "keyForButton", ":hover") ? (
          <path
            className="flower"
            transform={this.props.transform_content}
            d={this.props.path}
          />
        ) : null}
      </g>
    );
  }
}

export default Radium(Link);
