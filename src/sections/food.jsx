import React, { Component } from 'react';
import Categories from '../components/square';
import Plx from 'react-plx';

import Basket from '../components/food/basket.jsx';
import Do from '../components/food/do.jsx';
import PlateContainer from '../components/food/plate';
import '../style/food.scss';
import '../style/water.css';

const category = [
  {
    _id: 0,
    color: '#D2F2FF',
    name: 'Blue',
    img: require('../imgs/food/crop.png'),
    description:
      'The amount of surface water and groundwater required (evaporated or used directly) to produce an item – for food this mainly refers to crop irrigation.'
  },
  {
    _id: 1,
    color: '#D0E6BF',
    img: require('../imgs/food/rain.png'),
    name: 'Green',
    description:
      'The amount of rainwater required (evaporated or used directly) to make an item – for food this refers to dry farming where crops receive only rainwater.'
  },
  {
    _id: 2,
    color: '#DEDEDE',
    img: require('../imgs/food/wave.png'),
    name: 'Grey',
    description:
      'The amount of freshwater required to dilute the wastewater generated in manufacturing, in order to maintain water quality , as determined by state and local standards – for food this refers to things like field and farm runoff.'
  }
];

class Food extends Component {
  state = {};
  render() {
    return (
      <div className="food">
        <div className="plate section">
          <h2 className="title">Find about the water in your plate!</h2>
          <PlateContainer />
        </div>

        <div className="category section">
          <Categories items={category} />
        </div>

        <div className="basket section">
          <Basket />
        </div>

        <div className="do section section-large">
          <Do />
        </div>
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
