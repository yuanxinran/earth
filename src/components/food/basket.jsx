import React, { Component } from 'react';
import '../../style/basket.scss';
import Plx from 'react-plx';
import ReactHover from 'react-hover';
const options = {
  followCursor: true,
  shiftX: 20,
  shiftY: 0
};

const basket = [
  {
    type: 'High in water footprint',
    description:
      'Animals that are factory farm- or feedlot-raised (which the majority of livestock in this country are) consume feed that is primarily composed of corn and soy, both of which rely on high amounts of irrigation and rainwater – the blue and green water footprints.',
    img: require('../../imgs/food/redB.png'),
    food: [
      {
        img: 'steak',
        name: 'steak',
        x: -35,
        y: -150
      },
      {
        img: 'meat',
        name: 'other meat',

        x: -14,
        y: -220
      },
      { img: 'nuts', name: 'nuts', x: 14, y: -220 },
      { img: 'processed', name: 'processed food', x: 35, y: -150 }
    ]
  },
  {
    type: 'Low in water footprint',
    description:
      'Fruits and vegetables low in water footprint in general. Regarding milk, soy and oat milks have smaller water footprints compared to nut milks that have a relatively high water footprint. Cow’s milk typically has the biggest water footprint.',
    img: require('../../imgs/food/greenB.png'),
    food: [
      {
        img: 'vegetable',
        name: 'vegetables',
        text: 'highest water footprint',
        x: -30,
        y: -150
      },
      { img: 'fruit', name: 'fruit', text: 'haha', x: 0, y: -200 },
      { img: 'milk', name: 'milk', text: 'haha', x: 30, y: -150 }
    ]
  }
];
class Basket extends Component {
  state = {};
  render() {
    return (
      <div className="row">
        <div className="col-sm-6 each">
          <Each basket={basket[0]} />
        </div>
        <div className="col-sm-6 each">
          <Each basket={basket[1]} />
        </div>
      </div>
    );
  }
}

class Each extends Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    return (
      <React.Fragment>
        <img src={this.props.basket.img} className="basket-img" />
        {this.props.basket.food.map(function(f, i) {
          return (
            <Plx parallaxData={getpData(f)}>
              <div className="food-img">
                <div>{f.name}</div>
                <img src={require(`../../imgs/food/footprint/${f.img}.png`)} />
              </div>
            </Plx>
          );
        })}
        <div className="text">
          <div className="title">{this.props.basket.type}</div>
          <div className="description">{this.props.basket.description}</div>
        </div>
      </React.Fragment>
    );
  }
}

function getpData(item) {
  var data = [
    {
      start: '0',
      end: '.food-img',
      properties: [
        {
          startValue: 0,
          endValue: 0,
          property: 'opacityFilter'
        }
      ]
    },

    {
      start: '.food-img',
      duration: 200,
      properties: [
        {
          startValue: 0,
          endValue: item.y,
          property: 'translateY'
        },
        {
          startValue: 0,
          endValue: item.x,
          unit: '%',
          property: 'translateX'
        },
        { startValue: 0.1, endValue: 1, property: 'opacityFilter' }
      ]
    }
  ];
  return data;
}

const pData = [
  {
    start: '.food-img',
    duration: 200,
    properties: [
      {
        startValue: 0,
        endValue: -200,
        property: 'translateY'
      },
      {
        startValue: 0,
        endValue: 10,
        unit: '%',
        property: 'translateX'
      },
      { startValue: 0, endValue: 1, property: 'opacityFilter' }
    ]
  }
];

export default Basket;
