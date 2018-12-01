import React, { Component } from 'react';
import AnimatedSquare from '../components/square';
import Plx from 'react-plx';
import Cup from '../components/cup';
import Steps from '../components/steps';
import ReactHover from 'react-hover';
import MoreTips from '../components/tips/more';
import PlateContainer from '../components/food/plate';
import '../style/food.scss';
import '../style/water.css';

class Food extends Component {
  state = {};
  render() {
    return (
      <div className="row water-content section">
        <div className="food" style={{ width: '90%', margin: 'auto auto' }}>
          <div className="plate">
            <h2 className="title">Find about the water in your plate!</h2>
            <PlateContainer />
          </div>
        </div>

        <div className="col-sm-12 tip-content">
          <div className="square">
            <AnimatedSquare />
          </div>
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

        {/* <div className="col-sm-12 water">
          <div className="square">
            <AnimatedSquare />
            <AnimatedSquare />
            <AnimatedSquare id="water-end" />
          </div>
        </div> */}
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

export default Food;
