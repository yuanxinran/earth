import React, { Component } from 'react';
import AnimatedNumber from 'react-animated-number';
class Buy extends Component {
  state = { value: null };

  constructor(props) {
    super(props);
    this.state = {
      value: [null, null, null, null],
      valueSum: 0,
      textColor: 'lightgrey',
      items: [
        { _id: 0, img: 'shirt', name: 'Shirts', water: 659 },
        { _id: 1, img: 'jeans', name: 'Jeans', water: 2108 },
        { _id: 2, img: 'shoes', name: 'Shoes', water: 3000 },
        { _id: 3, img: 'coffee', name: 'Starbucks?', water: 3 }
      ]
    };

    this.handleChange = this.handleChange.bind(this);
    this.calculate = this.calculate.bind(this);
  }

  handleChange(event) {
    var newValue = this.state.value;
    newValue[event.target.id] = event.target.value;
    this.setState({ value: newValue, textColor: 'lightgrey' });
  }

  calculate() {
    var i;
    var sum = 0;
    var items = this.state.items;
    for (i = 0; i < this.state.value.length; i++) {
      let num = this.state.value[i];
      console.log(num);
      if (num == null) {
        num = 0;
      }
      let water = items[i].water;
      console.log(water);
      sum += num * water;
    }
    console.log(sum);
    this.setState({ valueSum: sum, textColor: 'black' });
  }

  render() {
    var parent = this;
    return (
      <React.Fragment>
        <div className="title">
          See how much water do you consume during Black Friday?
        </div>
        <div className="subtitle">Input the # of items you bought!</div>

        <div className="form row" style={{ backgroundColor: 'transparent' }}>
          <div>
            {this.state.items.map(function(item, i) {
              return (
                <div key={i} className="col-sm-3 form-section">
                  <img
                    src={require(`../../imgs/product/buy/${item.img}.png`)}
                  />
                  <label>
                    <div className="label">{item.name}</div>
                    <input
                      type="number"
                      id={i}
                      value={parent.state.value[i]}
                      onChange={parent.handleChange}
                    />
                  </label>
                </div>
              );
            })}
            <button
              className="btn btn-light"
              style={{
                fontSize: '2vw',
                padding: '10px',
                border: '1px solid #8CC5AB',
                cursor: 'pointer'
              }}
              onClick={this.calculate}
            >
              Submit
            </button>
          </div>
        </div>
        <div className="number" style={{ color: `${this.state.textColor}` }}>
          <AnimatedNumber
            value={this.state.valueSum}
            style={{
              transition: '0.8s ease-out',
              transitionProperty: 'background-color, color, opacity'
            }}
            frameStyle={perc =>
              perc === 100 ? {} : { backgroundColor: 'transparent' }
            }
            duration={300}
            stepPrecision={1}
          />{' '}
          Gallons
        </div>
        <div
          className="number"
          style={{ color: `${this.state.textColor}`, fontSize: '2vw' }}
        >
          ={' '}
          <AnimatedNumber
            value={this.state.valueSum * 7.6}
            style={{
              transition: '0.8s ease-out',
              transitionProperty: 'background-color, color, opacity'
            }}
            frameStyle={perc =>
              perc === 100 ? {} : { backgroundColor: 'transparent' }
            }
            duration={300}
            stepPrecision={1}
          />{' '}
          bottles
        </div>
      </React.Fragment>
    );
  }
}

export default Buy;
