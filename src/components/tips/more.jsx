import * as React from 'react';
import Masonry from 'react-masonry-component';
import { getTips } from './water.js';
import Plx from 'react-plx';

const masonryOptions = {
  transitionDuration: 0
};

const percentagePara = [
  {
    start: 'self',
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

const imagesLoadedOptions = { background: '.my-bg-image-el' };

class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tips: getTips()
    };
    this.getStyle = this.getStyle.bind(this);
  }

  getStyle(show) {
    if (show) {
      return { opacity: '1', backgroundColor: '#8f9bad' };
    }
  }

  render() {
    var parent = this;
    return (
      <div className="gallery-container">
        <Masonry
          className="my-gallery-class" // default ''
          elementType={'ul'} // default 'div'
          options={masonryOptions} // default {}
          disableImagesLoaded={false} // default false
          updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
          imagesLoadedOptions={imagesLoadedOptions} // default {}
        >
          {this.state.tips.map(function(tip, i) {
            return (
              <Plx
                parallaxData={percentagePara}
                className="image-container"
                style={{ width: '32%', border: '1vw solid white' }}
              >
                <img style={{ width: '100%' }} src={tip.img} />
                <div className="overlay" style={parent.getStyle(tip.show)}>
                  <div className="text">
                    <span style={{ fontSize: '1.5em' }}>{tip.name}</span>
                    <br />
                    <span
                      style={{
                        fontSize: '0.8em',
                        lineHeight: '80%',
                        fontFamily: 'Roboto'
                      }}
                    >
                      {tip.description}
                    </span>
                  </div>
                </div>
              </Plx>
            );
          })}
        </Masonry>
      </div>
    );
  }
}

export default Gallery;