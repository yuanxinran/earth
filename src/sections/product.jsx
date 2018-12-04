import React, { Component } from 'react';
import ProductUse, { ProductUseI } from '../components/product/use.jsx';
import Buy from '../components/product/buy.jsx';
import Save from '../components/product/saves.jsx';
import Text from '../components/text.jsx';
import Plx from 'react-plx';
import '../style/product.scss';

class Product extends Component {
  state = {};
  render() {
    return (
      <div className="product">
        <div className="use section">
          <ProductUse />
        </div>
        <div className="use2 section">
          <ProductUseI />
        </div>
        <div className="buy section">
          <Buy />
        </div>

        <div className="section">
          <Text
            font="1.5vw"
            content="Nobody will have a water footprint of zero because it takes water to make just about everything we choose to buy, eat, use and throw away. Individual daily decisions might seem small, but cumulatively they can have a great impact."
          />

          <Text
            font="1.5vw"
            content="Small actions like recycling at home, reusing items when possible and using fewer plastic bags and paper towels can make a small but cumulative difference in water consumption. "
          />

          <Text
            font="1.5vw"
            content="Today, 1 in 9 people lack access to safe water and 1 in 3 people lack access to a toilet. We can change this. Let’s work together to make the power of water available to all."
          />

          <Text
            content="Let's Reduce, Reuse and Recycle"
            font="2.5vw"
            top="2em"
          />
          <Plx parallaxData={para}>
            <img
              src={require('../imgs/indoor/fist.png')}
              style={{ width: '30vw' }}
            />
          </Plx>
        </div>
        <div className="save section">
          <Save />
        </div>
      </div>
    );
  }
}

const para = [
  {
    start: '0',
    end: '1',
    EndOffset: '150',
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
    startOffset: '150',
    duration: '200',
    properties: [
      {
        startValue: 0,
        endValue: 1,
        property: 'opacityFilter'
      },
      {
        startValue: 0,
        endValue: 0.8,
        property: 'scale'
      }
    ]
  },
  {
    start: 'self',
    startOffset: '400',
    duration: '500',
    properties: [
      {
        startValue: 0,
        endValue: 80,
        property: 'translateY'
      },
      {
        startValue: 0,
        endValue: 180,
        property: 'rotate'
      }
    ]
  }
];

export default Product;
