import React, { Component } from 'react';
import Text from '../text.jsx';

export class ProductUseI extends Component {
  state = {
    items: [
      'A water bottle: 3 gallons',
      'Electricity: 10 gallons/hour',
      'A sheet of paper: 3 gallons',
      'A car: 39,090 gallons',
      'Bed Sheet: 2,839 gallons',
      'Smart phone (mobile): 3,190 gallons',
      'A pound of plastic: 22 gallons',
      'Refine a gallon of gasline: 2 gallons'
    ]
  };
  render() {
    return (
      <React.Fragment>
        <Text
          content="To meet all of these needs, industrial facilities in the US withdraw over 15.9 billion gallons of water per day."
          font="1.3vw"
          weight="bold"
        />
        {this.state.items.map(function(item, i) {
          return <Text content={item} key={i} font="1.2vw" top="1em" />;
        })}

        <Text content="..." font="1.8vw" weight="bold" />
        <Text content="..." font="1.8vw" weight="bold" />
        <Text
          content="The water that keeps America afloat on a sea of consumer goods is enormous. As some of the biggest shoppers on the planet, the average American’s water footprint for buying, using and throwing away consumer goods (excluding food) is 583 gallons of water per day."
          font="1.3vw"
          weight="bold"
        />
      </React.Fragment>
    );
  }
}

class ProductUse extends Component {
  constructor(props) {
    super(props);
    this.hoverItem = this.hoverItem.bind(this);
    this.leaveItem = this.leaveItem.bind(this);
  }
  state = { selected: null };

  hoverItem(n) {
    this.setState({ selected: n });
  }
  leaveItem(n) {
    this.setState({ selected: null });
  }
  render() {
    var parent = this;
    return (
      <React.Fragment>
        <div className="title">
          Practically everything you buy, <br />
          use and consume has a water footprint because it took water to process
          and transport it.
        </div>

        <div className="rowa">
          <div className="img-container">
            <svg
              id="Layer_1"
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 272.33 238.58"
            >
              <title>shop</title>
              <image
                width="1888"
                height="1654"
                transform="scale(0.14)"
                xlinkHref={require('../../imgs/product/shopping.png')}
              />
              <circle
                id="phone"
                className="hotspot"
                cx="48.49"
                cy="99.49"
                r="25.73"
                onMouseOver={() => this.hoverItem(0)}
                onMouseLeave={() => this.leaveItem(0)}
              />
              <circle
                id="shirt"
                className="hotspot"
                cx="199.3"
                cy="83.64"
                r="25.73"
                onMouseOver={() => this.hoverItem(1)}
                onMouseLeave={() => this.leaveItem(1)}
              />
              <circle
                id="jeans"
                className="hotspot"
                cx="203.32"
                cy="186.35"
                r="25.73"
                onMouseOver={() => this.hoverItem(2)}
                onMouseLeave={() => this.leaveItem(2)}
              />
              <circle
                id="bag"
                className="hotspot"
                cx="90.64"
                cy="163.7"
                r="25.73"
                onMouseOver={() => this.hoverItem(3)}
                onMouseLeave={() => this.leaveItem(3)}
              />
              <circle
                id="boots"
                className="hotspot"
                cx="133.4"
                cy="212.08"
                r="25.73"
                onMouseOver={() => this.hoverItem(4)}
                onMouseLeave={() => this.leaveItem(4)}
              />
            </svg>
          </div>
          <div className="des-container">
            {products.map(function(p, i) {
              return (
                <div
                  className="card"
                  key={i}
                  style={{
                    opacity: `${parent.state.selected == i ? 1 : 0.5}`,
                    backgroundColor: `${
                      parent.state.selected == i ? '#F7F1DC' : '#ecf7f6'
                    }`
                  }}
                >
                  <div className="card-body">
                    <img src={require(`../../imgs/product/${p.img}.png`)} />
                    {p.name}:{' '}
                    <span style={{ color: 'black', fontSize: '1.5vw' }}>
                      {p.water}
                    </span>{' '}
                    gallons
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ProductUse;

class UseImage extends Component {
  state = {};
  render() {
    return (
      <svg
        id="Layer_1"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 272.33 238.58"
      >
        <title>shop</title>
        <image
          width="1888"
          height="1654"
          transform="scale(0.14)"
          xlinkHref={require('../../imgs/product/shopping.png')}
        />
        <circle
          id="phone"
          className="hotspot"
          cx="48.49"
          cy="99.49"
          r="25.73"
        />
        <circle
          id="shrit"
          className="hotspot"
          cx="199.3"
          cy="83.64"
          r="25.73"
        />
        <circle
          id="jeans"
          className="hotspot"
          cx="203.32"
          cy="186.35"
          r="25.73"
        />
        <circle id="bag" className="hotspot" cx="90.64" cy="163.7" r="25.73" />
        <circle
          id="shoe"
          className="hotspot"
          cx="133.4"
          cy="212.08"
          r="25.73"
        />
      </svg>
    );
  }
}

const products = [
  { _id: 0, img: 'phone', name: 'Phone', water: '3,190' },
  { _id: 1, img: 'shirt', name: 'Shirt', water: '659' },
  {
    _id: 2,
    img: 'jeans',
    name: 'Jeans',
    water: '2,108 gallons'
  },
  { _id: 3, img: 'bag', name: 'Paper Bag(1)', water: '1' },
  { _id: 4, img: 'boots', name: 'Leather Shoes', water: '3,626' }
];
