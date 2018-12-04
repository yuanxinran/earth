import React, { Component } from 'react';
import '../style/earth.css';
import Plx from 'react-plx';

const exampleParallaxData = [
  {
    start: 0,
    startOffset: 100,
    end: '#water-intro',
    endOffset: 500,
    properties: [
      {
        startValue: 0,
        endValue: 45,
        property: 'rotate'
      },
      {
        startValue: '#ffcccc',
        endValue: '#e6f7ff',
        property: 'backgroundColor'
      },
      {
        startValue: 0,
        endValue: 200,
        property: 'translateY'
      },
      {
        startValue: 1,
        endValue: 5,
        property: 'scale'
      }
    ]
  },
  {
    start: '#water-intro',
    startOffset: '700',
    end: '#usage',
    endOffset: '500',
    properties: [
      {
        startValue: 5,
        endValue: 1,
        property: 'scale'
      },
      {
        startValue: 200,
        endValue: 0,
        property: 'translateY'
      },
      {
        startValue: 1,
        endValue: 0.3,
        property: 'opacityFilter'
      }
    ]
  },
  {
    start: '#food-intro',
    startOffset: '100',
    end: '#food-intro',
    endOffset: '500',
    properties: [
      {
        startValue: 1,
        endValue: 5,
        property: 'scale'
      },
      {
        startValue: 0,
        endValue: 200,
        property: 'translateY'
      },
      {
        startValue: 0.3,
        endValue: 1,
        property: 'opacityFilter'
      },
      {
        startValue: 45,
        endValue: 135,
        property: 'rotate'
      }
    ]
  },
  {
    start: '#food-intro',
    startOffset: '900',
    duration: '400',
    properties: [
      {
        startValue: 5,
        endValue: 1,
        property: 'scale'
      },
      {
        startValue: 200,
        endValue: 0,
        property: 'translateY'
      },
      {
        startValue: 1,
        endValue: 0.3,
        property: 'opacityFilter'
      }
    ]
  }
];

const styles = {
  width: 100,
  height: 100,
  top: '3%',
  left: '3%',
  position: 'fixed',
  backgroundColor: '#ffcccc',
  zIndex: '1'
};

class EarthContainer extends Component {
  render() {
    return (
      <div style={{ height: 20 }}>
        <Plx parallaxData={exampleParallaxData} style={styles}>
          <img
            src={require('../imgs/earth.png')}
            style={{
              width: '80%',
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%,-50%)'
            }}
          />
        </Plx>
      </div>
    );
  }
}
export default EarthContainer;
