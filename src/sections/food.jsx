import React, { Component } from 'react';
import Categories from '../components/square';
import Plx from 'react-plx';
import Text from '../components/text.jsx';
import Basket from '../components/food/basket.jsx';
import Do from '../components/food/do.jsx';
import PlateContainer from '../components/food/plate';
import '../style/food.scss';
import '../style/water.css';

const category = [
  {
    _id: 0,
    color: '#5495D3',
    name: 'Blue',
    img: require('../imgs/food/crop.png'),
    description:
      'The amount of surface water and groundwater required (evaporated or used directly) to produce an item – for food this mainly refers to crop irrigation.'
  },
  {
    _id: 1,
    color: '#4EB977',
    img: require('../imgs/food/rain.png'),
    name: 'Green',
    description:
      'The amount of rainwater required (evaporated or used directly) to make an item – for food this refers to dry farming where crops receive only rainwater.'
  },
  {
    _id: 2,
    color: '#616161',
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
        <div className="section">
          <Text
            font="1.7vw"
            content="You might be surprised by how much water it takes to grow and make our food. In the US, agriculture is responsible for 80 percent of all water consumed"
          />
        </div>
        <div className="plate-container section">
          <div className="plate section">
            <PlateContainer />
          </div>
        </div>

        <div className="category section">
          <Text
            font="1.7vw"
            content="The reason food’s water footprint is so big has to do with the three parts of a water footprint: the blue, green and grey water components. Each part represents the volume of water consumed, evaporated and polluted when an item is produced."
            top="0"
          />
          <Categories items={category} />
        </div>

        <div className="basket section">
          <div style={{ marginBottom: '10vw' }}>
            <Text
              font="1.7vw"
              content="It takes water – a lot of it – to grow, process and transport your food. When you eat lower on the food chain, eat more whole foods and waste less food, you also save water."
            />
          </div>
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
