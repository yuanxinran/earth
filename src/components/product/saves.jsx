import React, { Component } from 'react';
class Save extends Component {
  state = {
    tips: [
      {
        _id: 0,
        img: 'shopping',
        title: 'Smarter Shopping',
        points: [
          { img: 'think', text: 'Think before you buyg' },
          {
            img: 'quality',
            text:
              'Buy quality, reusable products such as non-disposable cameras, reusable or electric razors, reusable dishes and mugs and utensils and have your child carry lunch in a reusable lunch box.'
          },
          {
            img: 'donate',
            text: 'Donate whatever you can, where it’s appropriate.'
          },
          { img: 'recycle', text: 'Recycle everything that you cand' }
        ]
      }
    ]
  };

  getCard(tip) {
    return (
      <div className="carousel-item active">
        <div className="card">
          <div className="card-body row">
            <div className="img col-sm-6">
              <img
                src={require(`../../imgs/product/save/${tip.img}.jpg`)}
                style={{ width: '100%' }}
              />
            </div>
            <div className="text col-sm-6">
              {tip.points.map(function(p, j) {
                return (
                  <div style={{ width: '100%' }}>
                    <img
                      src={require(`../../imgs/product/save/${p.img}.png`)}
                    />
                    <div
                      data-img={require(`../../imgs/product/save/${p.img}.png`)}
                      className="des"
                      style={{ backgroundColor: 'red' }}
                    >
                      {p.text}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
  render() {
    var parent = this;
    return (
      <React.Fragment>
        <div
          id="product-carousel"
          className="carousel slide"
          data-ride="carousel"
          data-interval="false"
        >
          <div className="carousel-inner">
            {this.state.tips.map(function(tip, i) {
              return (
                <React.Fragment key={i}>{parent.getCard(tip)}</React.Fragment>
              );
            })}

            <div className="carousel-item">
              <div class="card">
                <div class="card-body">
                  This is some text within a card body.
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div class="card">
                <div class="card-body">
                  This is some text within a card body.
                </div>
              </div>
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleControls"
            role="button"
            data-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleControls"
            role="button"
            data-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="sr-only">Next</span>
          </a>
        </div>
      </React.Fragment>
    );
  }
}

export default Save;
