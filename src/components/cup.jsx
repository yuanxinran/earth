import React, { Component } from 'react';
class Cup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fill: false
    };
    this.handleClick = this.handleClick.bind(this);
  }
  state = {};

  handleClick() {
    this.setState({ fill: true });
    console.log('click');
  }
  render() {
    return (
      <div className="event" id={this.props.animation}>
        <div onClick={this.handleClick} className="event-description">
          <div className="event-img">
            <img src={this.props.img} />
          </div>
          <div className="event-name">{this.props.name}</div>
        </div>
        <div className="animate-water">
          <svg
            id="cup"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 360.25 300.07"
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
              x="5.5"
              y="0.5"
              width="265.35"
              height="299.07"
              transform="translate(0 299.07)"
              className={this.state.fill ? 'content cup-animate' : 'content'}
              id="water-cup"
            />
            <path
              className="cup2"
              d="M292.63,286.41c50.87-16.5,81.62-66.12,74-112.36-6.05-36.75-35.6-66.87-74.75-76.12"
              transform="translate(-16.02 -42.13)"
            />

            <text
              text-anchor="middle"
              transform="translate(136 137.88)"
              className={this.state.fill ? 'text-animate text' : 'text'}
              opacity="0"
            >
              {this.props.water}
            </text>
            <line
              className="cup1"
              x1="0.5"
              y1="299.57"
              x2="275.85"
              y2="299.57"
            />
          </svg>
        </div>
      </div>
    );
  }
}

export default Cup;
