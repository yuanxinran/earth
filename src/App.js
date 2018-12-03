import React, { Component } from 'react';
import drop from './imgs/drops.svg';
import './App.scss';
import EarthContainer from './components/earth';
import Text from './components/title';
import Food from './sections/food';
import Indoor from './sections/indoor';
import Product from './sections/product';
import Plx from 'react-plx';
import ScrollTrigger from 'scrolltrigger-classes';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="row">
          <div className="title-area">
            <Text />
          </div>
          <div>
            <EarthContainer />
          </div>
        </div>

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
          <WaterCarousel />
        </div>

        <div id="usage">
          <h2>
            The use of water is{' '}
            <span style={{ color: 'black' }}>everywhere..</span>
          </h2>
          <Usage
            img={require('./imgs/main/agriculture.svg')}
            name="Agriculture"
            percent="70%"
            color="#E3F1F4"
            ex1="food"
            ex2="meat"
          />
          <Usage
            img={require('./imgs/main/industry.svg')}
            name="Industry"
            percent="22%"
            color="#E3F1F4"
            ex1="clothes"
            ex2="car"
          />
          <Usage
            img={require('./imgs/main/domestic.svg')}
            name="Domestic"
            percent="8%"
            color="#E3F1F4"
            ex1="toilet"
            ex2="shower"
          />
        </div>
        <Food />
        <Indoor />
        <Product />
      </div>
    );
  }
}

class WaterCarousel extends Component {
  state = {};
  render() {
    return (
      <div id="water-carousel" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li
            data-target="#water-carousel"
            data-slide-to="0"
            className="active"
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
              Many people in the world exist on 3 gallons of water per day or
              less. We can use that amount in one flush of the toilet.
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
              Running the tap while brushing your teeth can waste 4 gallons of
              water.
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
    );
  }
}

const percentagePara = [
  {
    start: 'self',
    duration: '200',
    properties: [
      {
        startValue: 0,
        endValue: 1,
        property: 'opacityFilter'
      },
      {
        startValue: -50,
        endValue: 10,
        property: 'translateY'
      }
    ]
  }
];

class Arrow extends Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    return (
      <svg
        fill="#4CB5AE"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        viewBox="0 0 610 607"
        x="0px"
        y="0px"
        fillRule="evenodd"
        clipRule="evenodd"
        transform="rotate(90)"
        style={{ fill: `${this.props.color}` }}
      >
        <defs />
        <g>
          <polygon
            className="fil0"
            points="0,0 297,303 0,607 310,607 610,303 310,0 "
          />
        </g>
      </svg>
    );
  }
}

class Usage extends Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    return (
      <div className="usage-part">
        <img src={this.props.img} />
        <div className="name">{this.props.name}</div>
        <Plx parallaxData={percentagePara} className="percent">
          {this.props.percent}
        </Plx>
        <Plx parallaxData={percentagePara} className="arrow">
          <Arrow color={this.props.color} />
        </Plx>
        <Plx parallaxData={percentagePara} className="sub-img">
          <img
            src={require(`./imgs/main/${this.props.ex1}.png`)}
            className="sub-img"
          />
          <img
            src={require(`./imgs/main/${this.props.ex2}.png`)}
            className="sub-img"
          />
        </Plx>
      </div>
    );
  }
}

export default App;
