import React, { Component } from 'react';
import AnimatedSquare from '../components/square.jsx';
import drop from '../imgs/drops.svg';
import tap from '../imgs/tap.png';
import Plx from 'react-plx';
import Cup from '../components/cup.jsx';
import '../style/water.css';

const factData = [
  {
    start: 'self',
    duration: '300',
    properties: [
      {
        startValue: 0,
        endValue: 1,
        property: 'opacity'
      }
    ],
    easing: 'easeInOut'
  }
];

class Water extends Component {
  state = {};
  render() {
    return (
      <div className="row water-content section">
        <div
          className="intro"
          style={{ backgroundImage: `url(${drop})` }}
          id="water-intro"
        >
          <div>
            <h1>Save Water</h1>
          </div>
        </div>
        <div className="intro-para">
          <div id="water-carousel" class="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
              <li
                data-target="#water-carousel"
                data-slide-to="0"
                class="active"
              />
              <li data-target="#water-carousel" data-slide-to="1" />
              <li data-target="#water-carousel" data-slide-to="2" />
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="fact">
                  Americans now use 127 percent more water than we did in 1950.
                </div>
              </div>
              <div className="carousel-item">
                <div className="fact">
                  Many people in the world exist on 3 gallons of water per day
                  or less. We can use that amount in one flush of the toilet.
                </div>
              </div>
              <div className="carousel-item">
                <div className="fact">
                  About 95 percent of the water entering our homes goes down the
                  drain.
                </div>
              </div>
              <div className="carousel-item">
                <div className="fact">
                  Running the tap while brushing your teeth can waste 4 gallons
                  of water.
                </div>
              </div>
            </div>
            <a
              className="carousel-control-prev"
              href="#water-carousel"
              role="button"
              data-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#water-carousel"
              role="button"
              data-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>

        <div className="events">
          <h1>How much water do we realy use today?</h1>
          <h2>How much of it is hidden in places you never expect?</h2>
          <Cup
            name="Making A Bottle"
            img="<img src='https://img.icons8.com/dusk/50/000000/water-bottle.png'>"
          />
          <Cup
            name="Power Alliance"
            img="<img src='https://img.icons8.com/dusk/50/000000/water-bottle.png'>"
          />
          <Cup
            name="Printing Paper(per sheet)"
            img="<img src='https://img.icons8.com/dusk/50/000000/water-bottle.png'>"
          />
          <Cup
            name="Making A Burger"
            img="<img src='https://img.icons8.com/dusk/50/000000/water-bottle.png'>"
          />
        </div>

        <div className="col-sm-12 water">
          <div className="square">
            <AnimatedSquare />
            <AnimatedSquare />
            <AnimatedSquare id="water-end" />
          </div>
        </div>
      </div>
    );
  }
}

export default Water;
