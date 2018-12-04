import React, { Component } from 'react';
import '../style/square.scss';
import Plx from 'react-plx';

class Categories extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    selected: 0
  };
  render() {
    var parent = this;
    return (
      <React.Fragment>
        {this.props.items.map(function(cat, i) {
          return (
            <Plx
              parallaxData={para}
              style={{ width: '65%', margin: 'auto auto' }}
              key={i}
              className="cat"
            >
              <div className="row" style={{ marginBottom: '1.5vw' }}>
                <div
                  className="col-sm-3 offset-sm-1"
                  style={{ color: `${cat.color}`, fontSize: '1.5vw' }}
                >
                  {cat.name}
                </div>
                <div className="col-sm-8">{cat.description}</div>
              </div>
            </Plx>
          );
        })}
      </React.Fragment>
    );
  }
}

const para = [
  {
    start: '0',
    end: 'self',
    EndOffset: '150',
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
    startOffset: '150',
    duration: '200',
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

export default Categories;
