import React, { Component } from 'react';
import '../style/indoor.scss';
import Plx from 'react-plx';
import Cup from '../components/cup';
import Steps from '../components/steps';
import MoreTips from '../components/tips/more';
class Indoor extends Component {
  state = {};
  render() {
    return (
      <div className="indoor section">
        <div id="hidden-usage">
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

        <div id="common-usage">
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

        <div id="change">
          <Plx className="title" parallaxData={percentagePara}>
            <div
              className="badge badge-secondary"
              style={{ marginBottom: '20px' }}
            >
              Small steps can make a change..
            </div>
            <div style={{ color: 'grey' }}>
              How to save up to 140 litres / day
            </div>
          </Plx>
          <Plx parallaxData={percentagePara}>
            <Steps />
          </Plx>
        </div>

        <div id="change2">
          <div className="title">
            <h2>And there are many many other things you can do...</h2>
          </div>
          <MoreTips scroll={percentagePara} />
        </div>
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
        endValue: 0,
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
