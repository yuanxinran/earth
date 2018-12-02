import React, { Component } from 'react';
import '../style/indoor.scss';
import Plx from 'react-plx';
import Cup from '../components/indoor/cup';
import Steps from '../components/indoor/steps';
import MoreTips from '../components/indoor/more';
import ScrollTrigger from 'react-scroll-trigger';

class Indoor extends Component {
  constructor(props) {
    super(props);
    this.startAnimate = this.startAnimate.bind(this);
  }
  state = {};

  startAnimate() {
    this.refs.bottles.classList.add('bottles-animate');
    this.refs.current.classList.add('current-animate');
    this.refs.pre.classList.add('pre-animate');
    this.refs.textc.classList.add('pre-animate');
    this.refs.textp.classList.add('pre-animate');
  }
  render() {
    return (
      <div className="indoor">
        <div id="hidden-usage" className="section">
          <h1>How much water do we use on...?</h1>

          <div className="title">
            <h6>Click To Find Out!</h6>
          </div>
          <Plx parallaxData={percentagePara}>
            <Cup
              name="Flushing A Toilet"
              img={require('../imgs/indoor/toilet.png')}
              animation="bottle"
              water="3 Gallons"
            />
            <Cup
              name="Taking A Shower"
              img={require('../imgs/indoor/shower.png')}
              animation="power"
              water="18 Gallons"
            />
            <Cup
              name="Washing Clothes"
              img={require('../imgs/indoor/washing.png')}
              animation="paper"
              water="15 Gallons"
            />
            <Cup
              name="Faucet(daily)"
              img={require('../imgs/indoor/tap.png')}
              animation="burger"
              water="18 Gallons"
            />
          </Plx>
        </div>

        <div id="common-usage" className="section">
          <h2 className="title">A household per day...</h2>
          <div className="common">
            {uses.map(function(use, i) {
              return (
                <UseWays
                  key={i}
                  img={use.img}
                  name={use.name}
                  decription={use.description}
                />
              );
            })}

            <div style={{ fontSize: '2em', color: '7a8cbd' }}>
              <Plx parallaxData={percentagePara}>.</Plx>
              <Plx parallaxData={percentagePara}>.</Plx>
              <Plx parallaxData={percentagePara}>.</Plx>
            </div>
          </div>
        </div>

        <div className="count section section-large">
          <div className="img-container">
            <div className="img" ref="current">
              <img src={require('../imgs/indoor/bottles.png')} />
              <ScrollTrigger onEnter={this.startAnimate} />
              <div className="back" ref="bottles" />
              <div className="text" ref="textc">
                138 Gallons
                <br />
                <span>NOW</span>
              </div>
            </div>
            <div className="img-pre" ref="pre">
              <img src={require('../imgs/indoor/bottles.png')} />
              <div className="back" />
              <div className="text" ref="textp">
                60 Gallons
                <br />
                <span>1950s</span>
              </div>
            </div>
          </div>
          <div className="title">
            How much water does a household uses per day now and in 1950s?
          </div>
          <div className="explain">
            On average in the US, direct indoor water use (water from the tap,
            toilet, dishwasher, etc.) adds up to about 138 gallons per household
            per day, or 60 gallons per person per day.
          </div>
        </div>

        <div id="change2" className="section">
          <div
            className="title"
            style={{ marginBottom: '300px', lineHeight: '250%' }}
          >
            <Plx parallaxData={getParallax(0)}>What</Plx>
            <Plx parallaxData={getParallax(1)}>we</Plx>
            <Plx parallaxData={getParallax(2)}>can</Plx>
            <Plx parallaxData={getParallax(3)}>do?</Plx>
            <Plx parallaxData={paraImage}>
              <img
                src={require('../imgs/indoor/fists.png')}
                style={{ left: '0vw' }}
              />
              <img
                src={require('../imgs/indoor/fists.png')}
                style={{ left: '20vw' }}
              />
              <img
                src={require('../imgs/indoor/fists.png')}
                style={{ left: '70vw' }}
              />
            </Plx>
          </div>

          <MoreTips scroll={percentagePara} />
        </div>

        <div id="change" className="section">
          <Plx className="title" parallaxData={percentagePara}>
            <div
              className="badge badge-secondary"
              style={{ marginBottom: '20px' }}
            >
              Start with small steps...
            </div>
            <div style={{ color: 'grey', fontSize: '1.5em' }}>
              How to save up to 140 litres / day
            </div>
          </Plx>
          <Plx parallaxData={percentagePara}>
            <Steps />
          </Plx>
        </div>

        {/* <div id="change2" className="section">
          <div className="title">
            <h2>And there are many many other things you can do...</h2>
          </div>
          <MoreTips scroll={percentagePara} />
        </div> */}
      </div>
    );
  }
}

export default Indoor;

const uses = [
  {
    img: 'toilet',
    name: 'Toilet Use',
    description: '3 gallons per flush x 6-8 flushes per day = 18-24 gallons'
  },
  { img: 'shower', name: 'Bath', description: 'Showers take 28 gallons.' },
  {
    img: 'washing',
    name: 'Washing Machine',
    description: 'A washing machine utilizes 15 gallons a load'
  },
  {
    img: 'tap',
    name: 'Hygiene',
    description: 'Faucets(kitchen, bathroom) uses 26 gallons'
  },
  {
    img: 'leak',
    name: 'Leak',
    description: 'Leak takes 17 gallons, which is 12 % of total usage.'
  },
  {
    img: 'dishwasher',
    name: 'Dishwasher',
    description: 'Using the dish washer takes 2 gallons.'
  },
  {
    img: 'bath',
    name: 'Bath',
    description: 'Bath takes 4 gallons on average.'
  }
];

const styles = {
  transfomr: 'translate(0, -50px)'
};

function getParallax(num) {
  var result = [
    {
      start: 'self',
      startOffset: `${70 * num}`,
      duration: '150',
      properties: [
        {
          startValue: 1,
          endValue: 3,
          property: 'scale'
        }
      ]
    }
  ];
  return result;
}

const paraImage = [
  {
    start: '0',
    end: 'self',
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
    startOffset: '50px',
    duration: '250',
    properties: [
      {
        startValue: 0,
        endValue: 0.7,
        property: 'opacityFilter'
      },
      {
        startValue: 0,
        endValue: -50,
        property: 'translateY'
      }
    ]
  }
];

const percentagePara = [
  {
    start: 'self',
    duration: '200',
    properties: [
      {
        startValue: 0,
        endValue: 1,
        property: 'opacity'
      },
      {
        startValue: 0,
        endValue: 50,
        property: 'translateY'
      }
    ]
  }
];

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
