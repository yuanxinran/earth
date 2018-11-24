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
        fill-rule="evenodd"
        clip-rule="evenodd"
        transform="rotate(90)"
        style={{ fill: `${this.props.color}` }}
      >
        <defs />
        <g>
          <polygon
            class="fil0"
            points="0,0 297,303 0,607 310,607 610,303 310,0 "
          />
        </g>
      </svg>
    );
  }
}

class UseWays extends Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    return (
      <Plx parallaxData={percentagePara} className="way">
        <img src={require(`../imgs/usage2/${this.props.img}.svg`)} />
        {this.props.decription}
      </Plx>
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
        <div cassName="name">{this.props.name}</div>
        <Plx parallaxData={percentagePara} className="percent">
          {this.props.percent}
        </Plx>
        <Plx parallaxData={percentagePara} className="arrow">
          <Arrow color={this.props.color} />
        </Plx>
        <Plx parallaxData={percentagePara} className="sub-img">
          <img
            src={require(`../imgs/usage/${this.props.ex1}.png`)}
            className="sub-img"
          />
          <img
            src={require(`../imgs/usage/${this.props.ex2}.png`)}
            className="sub-img"
          />
        </Plx>
      </div>
    );
  }
}

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
          <WaterCarousel />
        </div>

        <div id="usage">
          <h2>
            The use of water is{' '}
            <span style={{ color: 'black' }}>everywhere..</span>
          </h2>
          <Usage
            img={require('../imgs/water/agriculture.svg')}
            name="Agriculture"
            percent="70%"
            color="#E3F1F4"
            ex1="food"
            ex2="meat"
          />
          <Usage
            img={require('../imgs/water/industry.svg')}
            name="Industry"
            percent="22%"
            color="#E3F1F4"
            ex1="clothes"
            ex2="car"
          />
          <Usage
            img={require('../imgs/water/domestic.svg')}
            name="Domestic"
            percent="8%"
            color="#E3F1F4"
            ex1="toilet"
            ex2="shower"
          />
        </div>
        <div id="common-usage">
          <div className="title">
            <h2>Ways that you can think of...</h2>
          </div>
          <div className="common">
            <UseWays
              img="toilet"
              name="Toilet Use"
              decription="3 gallons per flush x 6-8 flushes per day = 18-24 gallons"
            />
            <UseWays
              img="bath"
              name="Bath"
              decription="A full tub is about 36 gallons"
            />
            <UseWays
              img="washing"
              name="Washing Machine"
              decription="A washing machine utilizes 15 gallons a load"
            />
            <UseWays
              img="tap"
              name="Hygiene"
              decription="Hygiene (washing face, brushing teeth, etc.) 2.5 gallons"
            />
            <div style={{ fontSize: '2em', color: '7a8cbd' }}>
              <div>.</div>
              <div>.</div>
              <div>.</div>
            </div>
          </div>
        </div>

        <div id="hidden-usage">
          <h1>How much water do we realy use today?</h1>

          <div className="title">
            <h2>How much of it is hidden in places you never expect?</h2>
            <h6>Click To Find Out!</h6>
          </div>
          <Plx parallaxData={percentagePara}>
            <Cup
              name="Making A Bottle"
              img={require('../imgs/water/bottle.png')}
              animation="bottle"
              water="3 Gallons"
            />
            <Cup
              name="Power Alliance(per hr)"
              img={require('../imgs/water/micro.png')}
              animation="power"
              water="10 Gallons"
            />
            <Cup
              name="Printing Paper(per sheet)"
              img={require('../imgs/water/printer.png')}
              animation="paper"
              water="3 Gallons"
            />
            <Cup
              name="Making A Burger"
              img={require('../imgs/water/burger.png')}
              animation="burger"
              water="634 Gallons"
            />
          </Plx>
        </div>

        <div id="change">
          <h2>Small steps can make a change..</h2>
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
