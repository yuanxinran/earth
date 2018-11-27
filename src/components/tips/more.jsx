import * as React from 'react';
import Masonry from 'react-masonry-component';

const masonryOptions = {
  transitionDuration: 0
};

const imagesLoadedOptions = { background: '.my-bg-image-el' };

class Gallery extends React.Component {
  render() {
    return (
      <Masonry
        className="my-gallery-class" // default ''
        elementType={'ul'} // default 'div'
        options={masonryOptions} // default {}
        disableImagesLoaded={false} // default false
        updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
        imagesLoadedOptions={imagesLoadedOptions} // default {}
      >
        <img
          class="card-img-top"
          src={require('../../imgs/watertips/recycling.jpg')}
          style={{ width: '18%' }}
        />
        <img
          class="card-img-top"
          src={require('../../imgs/watertips/shower.jpg')}
          style={{ width: '18%' }}
        />
        <img
          class="card-img-top"
          src={require('../../imgs/watertips/tap.jpg')}
          style={{ width: '18%' }}
        />
        <img
          class="card-img-top"
          src={require('../../imgs/watertips/recycling.jpg')}
          style={{ width: '18%' }}
        />
        <img
          class="card-img-top"
          src={require('../../imgs/watertips/shower.jpg')}
          style={{ width: '18%' }}
        />
        <img
          class="card-img-top"
          src={require('../../imgs/watertips/tap.jpg')}
          style={{ width: '18%' }}
        />
      </Masonry>
    );
  }
}

export default Gallery;
