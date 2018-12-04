import React, { Component } from 'react';
import Plx from 'react-plx';
class Text extends Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    return (
      <Plx
        className="text-general"
        parallaxData={para}
        style={{
          fontWeight: `${this.props.weight}`,
          fontSize: `${this.props.font}`,
          marginTop: `${this.props.top}`,
          backgroundColor: `${this.props.background}`,
          width: `${this.props.width}`
        }}
      >
        {this.props.content}
      </Plx>
    );
  }
}

const para = [
  {
    start: '0',
    end: 'self',
    EndOffset: '130',
    properties: [
      {
        startValue: 0,
        endValue: 0,
        property: 'opacityFilter'
      }
    ]
  },
  {
    start: 'self',
    startOffset: '130',
    duration: '150',
    properties: [
      {
        startValue: 0,
        endValue: 1,
        property: 'opacityFilter'
      },
      {
        startValue: -50,
        endValue: 0,
        property: 'translateY'
      }
    ]
  }
];
export default Text;
