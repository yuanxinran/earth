import React, { Component } from 'react';
class Cup extends Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    return (
      <div className="event">
        <div className="event-name">{this.props.name}</div>
        <div className="animate-water">
          <svg
            id="cup"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 352.25 300.07"
          >
            <defs />
            <title>cup</title>
            <rect
              className="cup1"
              x="0.5"
              y="0.5"
              width="275.35"
              height="299.07"
            />
            <rect
              className="cup1"
              x="0.5"
              y="0.5"
              width="275.35"
              height="299.07"
              transform="translate(0 199.07)"
              className="content"
              id="water-cup"
            />
            <path
              className="cup2"
              d="M292.63,286.41c50.87-16.5,81.62-66.12,74-112.36-6.05-36.75-35.6-66.87-74.75-76.12"
              transform="translate(-16.02 -42.13)"
            />
          </svg>
        </div>
      </div>
    );
  }
}

export default Cup;
