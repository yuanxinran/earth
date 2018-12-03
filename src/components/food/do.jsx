import React, { Component } from 'react';

const cards = [
  {
    img: 'vege',
    title: 'Meatless Monday',
    text:
      ' It takes an enormous amount of water to produce animal products like meat and dairy. Try Meatless Monday and go vegetarian one day a week. It could significantly lower your water footprint.'
  },
  {
    img: 'farm',
    title: 'Choose pasture-raised products',
    text:
      ' When you do eat meat, dairy and eggs, opt for pasture-raised products. It’s better for you and the planet, and grass (as opposed to corn and soy feed) is less likely to be irrigated so is less reliant on blue water resources.'
  },
  {
    img: 'nature',
    title: 'Avoid processed foods:',
    text:
      'A lot of water goes into processing foods. Opt for more fruits, vegetables, leafy greens (like spinach and kale) and whole grains.'
  },
  {
    img: 'plan',
    title: 'Plan your meal',
    text:
      'A lot of food actually goes into waste directly. Plan your meals so you only buy what you need and not more.'
  },
  {
    img: 'leftover',
    title: 'Eat leftovers!',
    text:
      'Take away the food you left in restaurants. If you want a change of pace, learn how to cook smart and turn leftovers into a new meal.'
  }
];

class Do extends Component {
  constructor(props) {
    super(props);
    this.clickNext = this.clickNext.bind(this);
    this.clickPre = this.clickPre.bind(this);
  }
  state = {
    selected: 0
  };

  clickPre() {
    if (this.state.selected != 0) {
      var pre = this.state.selected;
      var elem = document.getElementById('pre-card');
      var elem2 = document.getElementById('first-card');
      var opacity = 0;
      var opacity2 = 1;
      var left_distance = 0;
      var id = setInterval(frame, 6);
      function frame() {
        if (left_distance == 70) {
          clearInterval(id);
        } else {
          if (opacity < 1) {
            opacity = opacity + 0.1;
          }
          if (opacity2 >= 0.5) {
            opacity2 = opacity2 - 0.1;
          }
          left_distance = left_distance + 1;
          elem.style.opacity = opacity;
          elem2.style.opacity = opacity2;
          elem2.style.left = `${left_distance}%`;
        }
      }
      var pare = this;
      setTimeout(function() {
        pare.setState({ selected: pre - 1 });
      }, 300);
    }
  }
  clickNext() {
    if (this.state.selected < 4) {
      var pre = this.state.selected;
      var elem = document.getElementById('first-card');
      var elem2 = document.getElementById('second-card');
      var opacity = 1;
      var opacity2 = 0.5;
      var left_distance = 70;
      var id = setInterval(frame, 6);
      function frame() {
        if (left_distance == 0) {
          clearInterval(id);
        } else {
          opacity = opacity - 0.01;
          opacity2 = opacity2 + 0.1;
          left_distance = left_distance - 1;
          elem.style.opacity = opacity;
          elem2.style.opacity = opacity2;
          elem2.style.left = `${left_distance}%`;
        }
      }
      var pare = this;
      setTimeout(function() {
        pare.setState({ selected: pre + 1 });
      }, 300);
    }
  }

  render() {
    var parent = this;
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-sm-6">
            <div className="content">
              <h1>What we can do to reduce water footprint in food?</h1>
              <div>
                When you eat lower on the food chain, eat more whole foods and
                waste less food, you also save water.
              </div>
            </div>
          </div>
          <div className="col-sm-6 container">
            {cards.map(function(card, i) {
              if (i < parent.state.selected - 1) {
                return <Card className="first" item={card} key={i} />;
              } else if (i == parent.state.selected - 1) {
                return (
                  <Card className="first" id="pre-card" item={card} key={i} />
                );
              } else if (i == parent.state.selected) {
                return (
                  <Card className="first" id="first-card" item={card} key={i} />
                );
              } else if (i == parent.state.selected + 1) {
                return (
                  <Card
                    className="second"
                    id="second-card"
                    item={card}
                    key={i}
                  />
                );
              } else {
                return (
                  <Card
                    className="second"
                    item={card}
                    style={{ opacity: 0 }}
                    key={i}
                  />
                );
              }
            })}
            <div className="buttons">
              <button
                type="button"
                className="btn btn-dark"
                onClick={this.clickNext}
              >
                {'>'}
              </button>
              <button
                type="button"
                className="btn btn-dark"
                onClick={this.clickPre}
              >
                {'<'}
              </button>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

class Card extends Component {
  state = {};
  render() {
    return (
      <div
        className={`card ${this.props.className}`}
        id={this.props.id}
        style={this.props.style}
      >
        <img
          className="card-img-top"
          src={require(`../../imgs/food/do/${this.props.item.img}.jpg`)}
          alt="card image"
        />
        <div className="card-body">
          <h5 className="card-title">{this.props.item.title}</h5>
          <p className="card-text">{this.props.item.text}</p>
        </div>
      </div>
    );
  }
}

export default Do;
