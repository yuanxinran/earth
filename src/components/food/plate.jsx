import React, { Component } from 'react';
import '../../style/food.scss';
import AnimatedSquare from '../square.jsx';

const food = [
  { _id: 0, name: 'Steak(6 ounces)', water: '674', img: 'steak' },
  { _id: 1, name: 'Hamburger', water: '660', img: 'hamburger' },
  { _id: 2, name: 'Ham(3 ounces)', water: '135', img: 'ham' },
  { _id: 3, name: 'Eggs(1)', water: '52', img: 'egg' },
  { _id: 4, name: 'Salad(1)', water: '21', img: 'salad' },
  { _id: 5, name: 'Cheese(3 ounces)', water: '112', img: 'cheese' },
  { _id: 6, name: 'Apple(6 ounces)', water: '16', img: 'apple' }
];

class PlateContainer extends Component {
  constructor(props) {
    super(props);
    this.moveIn = this.moveIn.bind(this);
    this.pre = this.pre.bind(this);
    this.next = this.next.bind(this);
    this.moveIn = this.moveIn.bind(this);
    this.moveOut = this.moveOut.bind(this);
  }
  state = { items: food, selected: 0 };

  next() {
    if (this.state.selected != 6) {
      var preState = this.state.selected;
      this.moveOut(preState, 'left');
      this.moveIn(preState + 1, 'left');
      var pare = this;
      setTimeout(function() {
        pare.setState({ selected: preState + 1 });
      }, 300);
    }
  }

  pre() {
    if (this.state.selected != 0) {
      var preState = this.state.selected;
      this.moveOut(preState, 'right');
      this.moveIn(preState - 1, 'right');
      var pare = this;
      setTimeout(function() {
        pare.setState({ selected: preState - 1 });
      }, 300);
    }
  }

  moveOut(id, dir) {
    var elem = document.getElementById(`item${id}`);
    var pos = 50;
    var opacity = 1;
    if (dir == 'left') {
      var id = setInterval(left_frame, 7);
    } else {
      var id = setInterval(right_frame, 7);
    }
    function left_frame() {
      if (pos == 0) {
        clearInterval(id);
      } else {
        pos = pos - 1;
        opacity = opacity - 0.02;
        elem.style.left = `${pos}%`;
        elem.style.opacity = opacity;
      }
    }
    function right_frame() {
      if (pos == 100) {
        clearInterval(id);
      } else {
        pos = pos + 1;
        opacity = opacity - 0.02;
        elem.style.left = `${pos}%`;
        elem.style.opacity = opacity;
      }
    }
  }

  moveIn(id, dir) {
    var elem = document.getElementById(`item${id}`);

    var opacity = 0;
    if (dir == 'left') {
      var pos = 100;
      var id = setInterval(left_frame, 7);
    } else {
      var pos = 0;
      var id = setInterval(right_frame, 7);
    }
    function left_frame() {
      if (pos == 50) {
        clearInterval(id);
      } else {
        pos = pos - 1;
        opacity = opacity + 0.02;
        elem.style.left = `${pos}%`;
        elem.style.opacity = opacity;
      }
    }
    function right_frame() {
      if (pos == 50) {
        clearInterval(id);
      } else {
        pos = pos + 1;
        opacity = opacity + 0.02;
        elem.style.left = `${pos}%`;
        elem.style.opacity = opacity;
      }
    }
  }

  getStyle(id) {
    if (id == this.state.selected) {
      return { opacity: 1 };
    } else if (id < this.state.selected) {
      return { opacity: 0, left: '0' };
    } else {
      return { opacity: 0, left: '100%' };
    }
  }

  render() {
    var parent = this;
    return (
      <React.Fragment>
        <h2 className="title">Find about the water in your plate!</h2>
        <div className="button" style={{ left: '5%' }} onClick={this.pre}>
          {'<'}
        </div>
        <div className="background">
          <Plate />
        </div>
        {food.map(function(f, i) {
          return (
            <React.Fragment key={i}>
              <div
                id={`item${f._id}`}
                className="item"
                style={parent.getStyle(f._id)}
              >
                <img src={require(`../../imgs/food/${f.img}.png`)} />
                <div className="item-name">{f.name}</div>
                <div className="badge badge-secondary item-water">
                  {f.water} gallons
                </div>
              </div>
            </React.Fragment>
          );
        })}
        <div className="button" style={{ left: '95%' }} onClick={this.next}>
          {'>'}
        </div>
      </React.Fragment>
    );
  }
}

export default PlateContainer;

class Plate extends Component {
  state = {};
  render() {
    return (
      <svg
        fill="#BED9E1"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        x="0px"
        y="0px"
        viewBox="0 20 1000 1000"
      >
        <circle
          cx="500"
          cy="520"
          r="370"
          stroke="black"
          strokeWidth="0"
          fill="white"
        />
        <g>
          <path d="M832.6,461.1l-0.5-3.4c-0.2-1.1-0.4-2.2-0.7-3.3c-0.5-2.2-0.9-4.4-1.4-6.7c-0.5-2.2-0.9-4.4-1.4-6.7   c-0.5-2.2-1.1-4.4-1.7-6.5c-10.5-40.4-28.8-78.8-53.9-112.7c-25-34-56.9-63.4-93.5-86.1c-36.7-22.7-78.3-38.7-122.3-46   c-44-7.3-90.5-6.3-136.1,4.4c-4,0.8-8,2-12,3c-4,1.1-8,2.1-12,3.4c-4,1.3-7.9,2.6-11.9,3.9c-3.9,1.5-7.9,3-11.8,4.5   c-4,1.4-7.8,3.3-11.7,5c-1.9,0.9-3.9,1.7-5.9,2.6l-1.5,0.6l-1.4,0.7l-2.9,1.4c-3.8,2-7.7,3.8-11.5,5.9c-3.7,2.1-7.5,4.3-11.3,6.4   c-14.9,8.9-29.2,18.9-42.8,30c-13.5,11.2-26.2,23.5-37.9,36.7c-11.8,13.1-22.3,27.3-31.8,42.1c-4.9,7.3-9.1,15-13.4,22.6   c-2,3.9-4,7.8-5.9,11.6c-1,1.9-1.9,3.9-2.8,5.9c-0.9,2-1.8,4-2.7,5.9c-0.9,2-1.8,3.9-2.6,5.9c-0.8,2-1.6,4-2.4,6   c-0.8,2-1.6,4-2.4,6l-1.2,3l-1,3c-1.4,4.1-2.7,8.1-4.1,12.2c-1.2,4.1-2.3,8.2-3.5,12.3c-4.3,16.4-7.8,32.8-9.5,49.1l1-7.2l0.5-3.6   l0.7-3.6c0.9-4.8,1.7-9.6,2.7-14.4c1.1-4.7,2.2-9.5,3.4-14.3c0.3-1.2,0.6-2.4,1-3.5l1-3.5l2-7c5.7-18.7,13.1-37,21.9-54.5l3.4-6.5   l1.7-3.3l1.9-3.2l3.7-6.4l1.8-3.2l0.9-1.6l1-1.5c2.7-4.1,5.4-8.3,8-12.4l8.6-12c11.8-15.8,25-30.5,39.4-44.1   c14.4-13.5,29.9-25.9,46.4-36.8c4.2-2.6,8.3-5.3,12.5-7.9l12.9-7.3c4.4-2.3,8.8-4.5,13.2-6.7c2.2-1.2,4.5-2.1,6.7-3.1l6.8-3   c18.1-7.8,36.9-14,56.1-18.6l7.2-1.6l3.6-0.8c1.2-0.3,2.4-0.4,3.6-0.7c4.9-0.8,9.7-1.7,14.6-2.5l14.7-1.8c1.2-0.2,2.4-0.2,3.7-0.3   l3.7-0.3l7.4-0.5c19.6-1.1,39.4-0.5,58.8,1.7c4.9,0.7,9.7,1.3,14.6,2c4.8,0.9,9.6,1.8,14.4,2.7c9.5,2.1,19.1,4.3,28.4,7.2   c37.3,11.2,72.5,28.7,103.3,51.7c15.4,11.5,29.8,24.2,42.9,37.9l4.9,5.2l2.4,2.6l1.2,1.3l1.1,1.4c3.1,3.6,6.1,7.3,9.2,10.9   c2.9,3.8,5.7,7.5,8.6,11.3c1.5,1.8,2.7,3.8,4.1,5.8l4,5.8c20.9,31.3,36.5,65.6,45.4,101.2c-4.9-14-11.3-28.9-19-44.7   c-7.8-15.7-17-32.3-28.4-49.2c-13.5-20.4-29.4-39.3-46.9-56.2l-3.3-3.2l-1.6-1.6l-1.7-1.5l-6.9-6l-3.4-3l-3.6-2.8l-7.1-5.7   c-0.6-0.5-1.2-1-1.8-1.4l-1.9-1.3l-3.7-2.7l-7.4-5.3l-7.6-5l-3.8-2.5c-0.6-0.4-1.3-0.8-1.9-1.2l-2-1.1   c-41.6-25.1-88.5-40.9-136.5-45.8c0.1-0.9,0.3-2.7,0.4-3.6c-17.3-1.5-34.5-1.6-51.7-0.8c-17.1,1.1-34.1,3.4-50.8,6.8   c-4.1,1-8.3,1.9-12.4,2.9c-2.1,0.4-4.1,1-6.2,1.6l-6.1,1.7l-6.1,1.7l-6,2l-6,2l-3,1c-1,0.4-2,0.8-3,1.1c-3.9,1.5-7.9,3.1-11.8,4.6   c-3.9,1.7-7.7,3.5-11.6,5.2c-3.9,1.6-7.6,3.6-11.4,5.5c-3.8,1.9-7.6,3.8-11.2,5.9c-14.8,8.1-28.8,17.5-42.1,27.7l-5,3.9l-2.5,1.9   l-2.4,2l-9.6,8.2c-6.1,5.8-12.3,11.4-18.1,17.5l-4.4,4.5c-0.7,0.7-1.4,1.5-2.1,2.3l-2.1,2.4l-4.1,4.7l-2.1,2.4l-1,1.2l-1,1.2   l-7.8,9.8c-1.3,1.6-2.5,3.3-3.8,5l-3.7,5.1c-1.2,1.7-2.5,3.4-3.7,5.1l-3.4,5.3l-3.4,5.3l-1.7,2.6l-1.6,2.7l-6.3,10.9l-5.8,11.1   c-2,3.7-3.7,7.5-5.4,11.3l-2.6,5.7l-0.7,1.4l-0.6,1.5l-1.2,2.9c-1.5,3.9-3.2,7.8-4.7,11.7l-4.1,11.9l-1,3l-0.9,3l-1.8,6.1l-1.8,6.1   c-0.6,2-1,4.1-1.5,6.1l-1.5,6.1l-0.7,3.1c-0.3,1-0.5,2-0.7,3.1l-2.3,12.4c-0.2,1-0.4,2.1-0.6,3.1l-0.4,3.1l-0.8,6.3l-0.8,6.3   c-0.3,2.1-0.4,4.2-0.5,6.3c-0.3,4.2-0.7,8.4-1,12.6l-0.4,12.7l-0.1,3.2c0,1.1,0,2.1,0,3.2l0.1,6.3c0.1,4.2,0.1,8.5,0.5,12.7   c0.3,4.2,0.6,8.4,0.9,12.7c0.5,4.2,1.1,8.4,1.6,12.6c0.4,4.2,1.3,8.4,2,12.6c0.8,4.2,1.4,8.4,2.4,12.5c1,4.1,1.9,8.3,2.9,12.4   c1.2,4.1,2.3,8.2,3.5,12.3c1.1,4.1,2.6,8.1,4,12.1l2.1,6.1c0.3,1,0.7,2,1.1,3l1.2,3l2.4,5.9l1.2,3l0.6,1.5l0.7,1.5   c1.8,3.9,3.6,7.8,5.4,11.7c7.5,15.4,16.2,30.2,25.9,44.4c9.9,14.1,20.9,27.5,32.9,40c-3.3-3.7-3.6-4.7-3.1-4.6   c0.3,0.1,0.8,0.4,1.4,0.8c0.6,0.4,1.2,0.8,1.7,1.1c0.5,0.5,0.9,1,1.4,1.4c-0.4-0.5-0.9-0.9-1.4-1.4c0.8,0.5,1.1,0.5-0.3-1.2   c-1.4-1.7-4.2-5.3-9.9-11.7c5.6,6.4,8.5,10,9.9,11.7c1.4,1.7,1.1,1.7,0.3,1.2c-11.5-12.5-22-25.7-31.5-39.6   c-9.4-14-17.7-28.6-24.9-43.6c-1.7-3.8-3.5-7.6-5.2-11.4c-0.5-0.9-0.8-1.9-1.2-2.9l-1.1-2.9l-2.3-5.8c-0.7-1.9-1.6-3.9-2.3-5.8   l-2-5.9l-2-5.9c-0.3-1-0.7-2-1-3l-0.9-3c-1.1-4-2.3-8-3.4-12c-1-4-1.9-8.1-2.8-12.1l-0.7-3c-0.2-1-0.5-2-0.6-3l-1.1-6.1l-1.1-6.1   l-0.5-3.1l-0.4-3.1c-0.5-4.1-1-8.2-1.6-12.3c-0.2-1-0.2-2.1-0.3-3.1l-0.2-3.1l-0.5-6.2c-0.1-2.1-0.3-4.1-0.5-6.2l-0.1-6.2l-0.2-6.2   c0-2.1-0.2-4.1-0.1-6.2l0.3-12.4l0.1-3.1l0.2-3.1l0.5-6.2l0.5-6.2l0.1-1.5l0.2-1.5l0.4-3.1l1.6-12.2c2.7-16.2,6.3-32.2,11.1-47.9   c5-15.6,11-30.9,18-45.7c7.3-14.7,15.5-28.9,24.6-42.5c9.3-13.5,19.6-26.3,30.6-38.5l8.5-8.9c1.4-1.5,2.9-2.9,4.4-4.3l4.5-4.2   l4.5-4.2l4.7-4l4.7-4l2.3-2c0.8-0.7,1.6-1.3,2.4-1.9l9.7-7.6c3.3-2.4,6.7-4.8,10.1-7.1l2.5-1.8l1.3-0.9l1.3-0.8l5.2-3.3   c3.5-2.2,6.9-4.5,10.5-6.5c3.6-2,7.2-4.1,10.8-6.1c3.7-1.9,7.4-3.7,11-5.6l2.8-1.4c0.9-0.5,1.9-0.9,2.8-1.3l5.7-2.5l5.7-2.5   c1.9-0.9,3.8-1.5,5.8-2.3c15.3-6.3,31.3-11,47.4-14.9l6.1-1.4c2-0.4,4-1,6.1-1.3c4.1-0.7,8.2-1.4,12.3-2.1c2-0.4,4.1-0.6,6.2-0.9   l6.2-0.8l6.2-0.8c2.1-0.2,4.2-0.3,6.3-0.5c16.7-1.5,33.5-1.2,50.3-0.1l-4.9-0.4l-4.9-0.1l-9.8-0.3l-2.4-0.1l-2.4,0.1l-4.9,0.1   l-9.8,0.2l-9.8,0.7l-4.9,0.4l-2.4,0.2l-2.4,0.3l-9.7,1.2c-1.6,0.2-3.2,0.4-4.8,0.6l-4.8,0.8c-25.7,4.3-50.8,11.5-74.7,21.7   c-23.9,10.2-46.5,23.2-67.4,38.6c-1.3,0.9-2.6,2-3.9,2.9l-3.8,3l-3.8,3l-1.9,1.5c-0.6,0.5-1.2,1.1-1.8,1.6l-7.4,6.4   c-1.2,1.1-2.5,2.1-3.7,3.2l-3.5,3.4l-7,6.7c-2.3,2.3-4.5,4.7-6.7,7l-3.4,3.5c-0.6,0.6-1.1,1.2-1.7,1.8l-1.6,1.8l-6.4,7.3   c-2.2,2.4-4.1,5-6.1,7.5l-6,7.6l-5.6,7.9c-1.9,2.6-3.8,5.2-5.5,8c-3.5,5.5-7.1,10.8-10.2,16.5l-4.8,8.4l-4.4,8.6   c-3.1,5.7-5.6,11.7-8.3,17.5c-1.4,2.9-2.5,6-3.7,9l-3.6,9l-3.1,9.2c-1,3.1-2.2,6.1-3,9.2l-2.6,9.3l-0.7,2.3l-0.3,1.2l-0.3,1.2   l-1.1,4.7c-5.9,25.1-9,51-9.1,76.8c0,25.9,3.1,51.7,9,76.9c2.8,12.6,6.8,25,11,37.2c1.1,3,2.4,6,3.5,9l1.8,4.5l0.9,2.3l1,2.2l4,8.8   c0.7,1.5,1.3,3,2,4.4l2.2,4.3l4.4,8.6c1.5,2.8,3.2,5.6,4.8,8.4l2.4,4.2l1.2,2.1l1.3,2l5.3,8.2c0.9,1.4,1.7,2.8,2.7,4.1l2.8,4   l5.7,7.9l6,7.7c2,2.5,4,5.2,6.1,7.6c4.3,4.9,8.4,9.9,13,14.5c2.3,2.3,4.5,4.7,6.8,7l7.1,6.7l3.5,3.4c1.2,1.1,2.5,2.1,3.7,3.2   l7.4,6.4c0.6,0.5,1.2,1.1,1.9,1.6l1.9,1.5l3.8,3l3.8,3c1.3,1,2.5,2.1,3.9,3c21,15.4,43.8,28.5,67.9,38.8   c24.1,10.1,49.5,17.4,75.4,21.7c25.9,4.4,52.5,5.4,78.8,3.5l9.9-0.8l9.8-1.3c6.6-0.7,13.1-2,19.6-3.2c3.3-0.5,6.5-1.3,9.7-2.1   l9.7-2.2l9.6-2.7c3.2-0.9,6.4-1.7,9.5-2.9l9.4-3.2l2.4-0.8c0.8-0.3,1.5-0.6,2.3-0.9l4.6-1.8c3.1-1.2,6.2-2.4,9.3-3.7l9.1-4.1   l4.6-2.1l4.5-2.3l8.9-4.6l1.1-0.6l1.1-0.6l2.2-1.3l4.3-2.5l4.4-2.5c0.7-0.4,1.5-0.8,2.2-1.3l2.1-1.4c1.9-1.2,4.1-2.6,6.4-4.1   c2.3-1.5,4.9-3.1,7.4-4.9c2.6-1.8,5.2-3.7,8-5.7c0.7-0.5,1.4-1,2.1-1.5c0.7-0.5,1.3-1,2-1.6c1.3-1.1,2.7-2.1,4-3.2   c1.3-1.1,2.7-2.1,4-3.2c1.3-1.1,2.7-2.1,3.9-3.2c2.5-2.2,5-4.3,7.4-6.4c1.2-1,2.3-2,3.5-3c1.1-1,2.1-2,3.1-3c2-1.9,3.9-3.7,5.5-5.3   c27-24.6,50.1-54,67.1-86.7c8.5-16.3,15.7-33.4,21.4-50.9c5.5-17.6,9.6-35.7,12.1-53.9c0.5,4.7,2.1,3.8,3.8,2   c1.7-1.8,3.5-4.6,4.7-3.2c0.6,0.7,1,2.4,1.1,5.7c0.1,1.7,0,3.8-0.3,6.3c-0.2,2.6-0.6,5.6-1.1,9.3c-0.4,3.6-1.3,7.8-2.3,12.6   c-0.5,2.4-1.1,5-1.6,7.7c-0.7,2.7-1.5,5.6-2.3,8.6c-0.4,1.5-0.9,3.1-1.3,4.7c-0.2,0.8-0.5,1.6-0.7,2.4c-0.2,0.8-0.5,1.7-0.8,2.5   c-1.1,3.3-2.3,6.9-3.6,10.6c-0.3,0.9-0.6,1.9-1,2.8c-0.3,1-0.7,1.9-1.1,2.9c-0.8,1.9-1.6,3.9-2.4,5.9c-1.7,4-3.2,8.3-5.3,12.6   c0.8,0.4,2.5,1.1,3.3,1.4c2.2-4.3,3.9-8.7,5.8-13c0.9-2.1,1.8-4.2,2.8-6.3c0.9-2.1,1.6-4.2,2.4-6.3c0.8-2.1,1.6-4.1,2.4-6.2   c0.8-2,1.6-4,2.2-6.1c1.3-4,2.7-8,3.9-11.8c0.3-1,0.6-1.9,1-2.9c0.3-1,0.5-1.9,0.8-2.9c0.5-1.9,1.1-3.8,1.6-5.6   c0.5-1.8,1.1-3.7,1.6-5.4c0.3-0.9,0.5-1.8,0.8-2.7c0.2-0.9,0.4-1.8,0.7-2.6c0.9-3.5,1.7-6.9,2.5-10.2c0.4-1.6,0.8-3.3,1.2-4.8   c0.3-1.6,0.6-3.2,0.9-4.7c0.6-3.1,1.3-6,1.8-8.9c0.3-1.4,0.6-2.8,0.9-4.2c0.2-1.4,0.5-2.7,0.7-4c0.9-5.2,1.8-9.9,2.6-14.1   c1.2-8.3,2.4-14.5,3.6-18.3c1-3.6,2.1-4.8,3.1-3.4c0.5,0.7,1,2.1,1.4,4.2c0.4,2.2,0.8,5,1.2,8.7c0.2,1.8,0.3,3.8,0.5,6   c0.1,1.1,0.1,2.3,0.2,3.5c0,1.2,0,2.4,0,3.7c0,2.6,0,5.4-0.1,8.4c0,1.5-0.1,3-0.1,4.6c0,0.8,0,1.6-0.1,2.4   c-0.1,0.8-0.1,1.7-0.2,2.5c-0.3,3.4-0.6,7-0.9,10.8c-0.2,1.9-0.3,3.9-0.6,5.9c-0.3,2-0.6,4-0.9,6.1c-0.3,2.1-0.6,4.3-0.9,6.5   c-0.4,2.2-0.6,4.5-1.1,6.8c-0.9,4.6-1.9,9.4-2.9,14.4c-5.2,22.4-12.9,45.3-23.2,67.9c-10.4,22.6-23.4,44.9-39.2,65.9   c-15.8,21-34.3,40.9-55.1,58.7c-10.3,9-21.5,17.3-32.9,25.2c-1.4,1-2.9,1.9-4.4,2.9l-4.4,2.8l-4.4,2.8c-1.5,0.9-2.9,1.9-4.5,2.8   c-3,1.7-6.1,3.5-9.1,5.2l-4.6,2.6c-1.5,0.9-3.1,1.6-4.7,2.4c-25,13.1-51.8,23.5-79.6,30.8c-27.8,7.2-56.6,11-85.4,11.7l-5.4,0.1   c-1.8,0-3.6,0.1-5.4,0l-10.8-0.3l-5.4-0.1c-1.8,0-3.6-0.2-5.4-0.3l-10.8-0.8c-3.6-0.2-7.2-0.7-10.7-1.2c-3.6-0.4-7.1-0.9-10.7-1.3   c-3.6-0.5-7.1-1.2-10.6-1.8l-5.3-0.9c-1.8-0.3-3.5-0.6-5.3-1c-28.1-5.9-55.4-14.9-81.1-26.6c-18.7-8.6-36.6-18.8-53.6-30.3   c-17.1-11.5-33-24.6-47.9-38.8c-14.9-14.2-28.6-29.6-41-46.1c-12.3-16.5-23.2-34-32.7-52.3l-3.5-6.9l-0.9-1.7l-0.8-1.8l-1.6-3.5   l-3.2-7c-1.1-2.3-2.1-4.7-3.1-7.1l-5.7-14.4l-4.9-14.6c-6.2-19.7-10.8-39.8-13.7-60.2l-1.9-15.3l-1.1-15.4l-0.3-3.8l-0.1-3.9   l-0.2-7.7l-0.1-7.7l0.2-7.7l0.3-7.7l0.1-3.9l0.3-3.8l1.3-15.4l2.1-15.3c0.2-1.3,0.3-2.5,0.6-3.8l0.7-3.8l1.4-7.6l1-5.2   c0.3-1.7,0.8-3.4,1.2-5.2c0.8-3.4,1.7-6.9,2.5-10.3c0.8-3.5,1.8-6.9,2.8-10.3c1-3.4,2-6.8,3-10.2c1.1-3.4,2.3-6.7,3.5-10.1l1.8-5.1   l0.9-2.5c0.3-0.8,0.7-1.7,1-2.5c1.3-3.3,2.7-6.6,4-10l2-5l2.3-4.9c1.5-3.3,3-6.5,4.5-9.8c0.7-1.7,1.6-3.2,2.4-4.8l2.5-4.8l2.5-4.8   c0.8-1.6,1.6-3.2,2.6-4.8c1.8-3.1,3.6-6.2,5.5-9.4l2.7-4.7l3-4.6c2-3,4-6.1,5.9-9.1c1-1.5,2.1-3,3.1-4.5l3.2-4.4l3.2-4.4l1.6-2.2   c0.5-0.7,1.1-1.4,1.7-2.1c17.8-23,38.2-44.2,60.9-62.7c22.8-18.4,47.7-34.2,74.2-47c26.5-12.6,54.5-22,83.1-28.1   c3.6-0.9,7.2-1.4,10.8-2.1l10.8-1.9c3.6-0.5,7.2-0.9,10.9-1.3l5.4-0.7l2.7-0.3l2.7-0.2c3.6-0.3,7.3-0.5,10.9-0.8l5.4-0.4l5.4-0.1   c3.6-0.1,7.2-0.1,10.9-0.2l2.7,0l2.7,0.1l5.4,0.2c28.9,0.9,57.6,5,85.1,12.5c27.5,7.6,53.8,18.3,78.2,31.6   c17.8,9.6,38.2,22.5,58.1,38.2c19.8,15.7,39,34.3,55.2,53.8c16.2,19.5,29.4,39.8,38.9,57.6c4.6,9,8.8,17.2,11.7,24.6   c0.8,1.8,1.5,3.6,2.2,5.2c0.7,1.7,1.4,3.3,1.9,4.8c1.1,3.1,2,5.9,2.8,8.3c8.9,27.7,6.6,29.5,3.5,25.8   c-9.8-31.2-23.5-61.3-41.3-88.7l-3.3-5.2l-0.8-1.3l-0.9-1.3l-1.8-2.5l-7.1-10c-2.5-3.2-5-6.4-7.5-9.7c-1.3-1.6-2.5-3.2-3.8-4.8   l-4-4.6c-10.4-12.5-22.1-24-34.1-35c-48.4-43.7-108.8-73.4-172.3-85.8c-19.4-4-39.2-6.1-59.1-6.8c-5-0.1-9.9-0.4-14.9-0.2   c-5,0.1-9.9,0.1-14.9,0.3l-14.9,1c-2.5,0.1-4.9,0.5-7.4,0.8l-7.4,0.9c-19.7,2.6-39.2,6.7-58.3,12.4c-19,5.8-37.6,13.2-55.5,22   l-6.7,3.4l-3.3,1.7c-1.1,0.6-2.2,1.2-3.3,1.8c-4.3,2.5-8.7,4.9-13,7.4l-12.7,8l-1.6,1l-1.5,1.1l-3.1,2.1l-6.1,4.3   c-16.2,11.6-31.5,24.5-45.7,38.6l-10.4,10.7l-9.9,11.2c-1.7,1.8-3.2,3.8-4.8,5.8l-4.7,5.8c-3.2,3.8-6.1,8-9,12   c-11.7,16.2-22.1,33.4-31.1,51.3c8.9-17.5,19.1-34.3,30.6-50.2l4.4-6l2.2-3l2.3-2.9c3.1-3.8,6.2-7.7,9.3-11.5   c3.3-3.7,6.5-7.4,9.8-11.1l1.2-1.4l1.3-1.3l2.6-2.7l5.2-5.3c14-14,29.1-26.9,45.1-38.5c4.1-2.8,8.1-5.7,12.2-8.5   c4.2-2.6,8.4-5.3,12.6-7.9c1.1-0.6,2.1-1.4,3.2-2l3.2-1.8l6.5-3.7l3.2-1.8l1.6-0.9l1.7-0.8l6.7-3.4l6.7-3.4c2.2-1.1,4.5-2,6.8-3.1   l6.8-3l3.4-1.5l3.5-1.4c4.7-1.8,9.3-3.6,14-5.3c4.7-1.6,9.5-3.1,14.2-4.7c19.1-5.8,38.7-10.2,58.6-12.9c19.9-2.9,40-3.7,60.1-3.2   c20.1,0.6,40.2,2.6,60,6.6c4,0.7,7.9,1.7,11.8,2.6l5.9,1.4c2,0.5,3.9,0.9,5.9,1.5c7.7,2.3,15.5,4.3,23.1,7.1l5.7,2l2.9,1   c1,0.3,1.9,0.7,2.8,1.1l11.2,4.5l2.8,1.1l2.7,1.3l5.5,2.5l5.5,2.5c0.9,0.4,1.8,0.8,2.7,1.3l2.7,1.4l10.7,5.6c1.8,0.9,3.5,2,5.3,3   l5.2,3l5.2,3c0.9,0.5,1.7,1,2.6,1.6l2.5,1.6l10.1,6.6c3.3,2.3,6.5,4.7,9.8,7l4.9,3.5l4.7,3.8c3.1,2.5,6.3,5,9.4,7.5l9.1,8l2.3,2   l1.1,1l1.1,1l4.3,4.2l4.3,4.2c1.4,1.4,2.9,2.8,4.3,4.3l8.3,8.8l2.1,2.2l2,2.3l3.9,4.6c5.3,6,10.1,12.5,15.1,18.8   c1.3,1.6,2.3,3.3,3.5,4.9l3.5,4.9l3.5,4.9c1.1,1.6,2.2,3.4,3.3,5.1l6.4,10.2l5.9,10.5c1,1.7,2,3.5,2.9,5.2l2.7,5.4   c1.8,3.6,3.6,7.1,5.4,10.8l4.9,11l1.2,2.7c0.4,0.9,0.8,1.8,1.2,2.8l2.2,5.6l2.2,5.6c0.7,1.9,1.5,3.7,2.1,5.6l3.8,11.4   c-3.3-3.9-6.5-7.4-5.7,0.4c0,0,0.2,0.6,0.5,1.6c0.2,0.5,0.4,1.2,0.6,1.9c0.3,0.7,0.5,1.6,0.8,2.5c1.1,3.8,2.6,9.1,4.2,15   c0.8,3,1.4,6.1,2.2,9.2c0.7,3.2,1.5,6.3,2.1,9.5c1.1,6.3,2.2,12.3,3,17.1c0.6,9.8,1.3,18,1,24.8c0,3.4-0.1,6.5-0.2,9.3   c0,1.4-0.2,2.7-0.3,3.9c-0.1,1.2-0.3,2.4-0.4,3.4c-1.1,8.5-2.3,12.1-3.7,12.1c-1.3,0-2.8-3.6-4.2-9.4c-0.4-1.5-0.7-3.1-1.1-4.8   c-0.4-1.7-0.7-3.6-1.2-5.5c-0.9-3.9-1.8-8.2-2.7-12.8c-0.3-2.4-1-4.8-1.5-7.2c-0.6-2.5-1.1-5-1.7-7.6c-0.3-1.3-0.6-2.6-0.9-4   c-0.4-1.3-0.7-2.7-1.1-4C834.1,466.7,833.4,464,832.6,461.1z" />
        </g>

        <g>
          <path d="M725.7,481.8c-0.4-3-1.2-6-1.8-9c-0.3-1.5-0.6-3-1-4.5c-0.4-1.5-0.8-3-1.2-4.4c-7.2-27.3-19.7-53.2-36.6-76   c-17-22.9-38.4-42.7-63.2-58c-24.8-15.3-52.8-26.1-82.6-31c-29.7-4.9-61.1-4.1-91.8,3.1c-21.5,5-43.1,13.6-63.1,25.4   c-10,6-19.7,12.8-28.8,20.2c-9.1,7.6-17.6,15.9-25.5,24.7c-8,8.8-15,18.4-21.4,28.3c-3.3,4.9-6.1,10.1-9,15.2   c-1.3,2.6-2.7,5.2-4,7.8c-0.7,1.3-1.3,2.6-1.9,4l-1.8,4c-4.7,10.7-8.7,21.6-11.6,32.6c-2.9,11-5.2,22.1-6.4,33.1   c6.2-52.1,31.4-102.4,70.3-138.8c19.4-18.3,41.9-33.3,66.4-43.8c12.2-5.3,24.9-9.5,37.8-12.6l4.9-1.1l2.4-0.6   c0.8-0.2,1.6-0.3,2.5-0.4c3.3-0.6,6.5-1.2,9.8-1.7l9.9-1.2c3.3-0.3,6.6-0.5,9.9-0.8c13.3-0.7,26.5-0.4,39.7,1.1   c13.2,1.4,26.1,4.2,38.7,7.9c25.2,7.5,49,19.3,69.8,34.8c10.4,7.7,20.2,16.3,29.1,25.5c2.2,2.4,4.4,4.7,6.5,7.1   c2.1,2.4,4.1,4.9,6.2,7.3c2,2.5,3.9,5.1,5.8,7.6c1,1.2,1.9,2.6,2.8,3.9l2.7,3.9c14.2,21.1,24.9,44.3,31.1,68.3   c-3.1-9.5-7.3-19.7-12.4-30.5c-5.2-10.7-11.4-22-19.1-33.5c-9.2-13.9-20-26.6-32-38.1c-12-11.4-25.1-21.7-39.3-30.1   c-28.3-17-60.1-27.7-92.7-31c0-0.5,0.1-1.3,0.2-1.8c-11.7-1-23.4-1.1-35-0.6c-11.6,0.7-23.1,2.3-34.4,4.6   c-11.3,2.4-22.3,5.7-33.1,9.6c-2.7,1-5.3,2.1-8,3.1c-2.6,1.1-5.2,2.3-7.8,3.5c-2.6,1.1-5.2,2.5-7.7,3.8c-2.5,1.3-5.1,2.5-7.6,4   c-10,5.5-19.5,11.9-28.5,18.8l-3.4,2.6l-1.7,1.3l-1.6,1.4l-6.5,5.6c-4.1,3.9-8.3,7.7-12.2,11.9l-3,3.1c-1,1-1.9,2.1-2.8,3.2   c-1.9,2.2-3.8,4.2-5.6,6.4l-5.3,6.7c-0.9,1.1-1.7,2.3-2.5,3.4l-2.5,3.5c-0.8,1.2-1.7,2.3-2.5,3.5l-2.3,3.6l-2.3,3.6l-1.2,1.8   l-1.1,1.8l-4.3,7.4l-3.9,7.5c-1.4,2.5-2.5,5.1-3.7,7.7c-1.2,2.6-2.4,5.1-3.4,7.8c-1,2.6-2.1,5.3-3.1,7.9l-2.8,8.1l-0.7,2l-0.6,2   l-1.2,4.1l-1.2,4.1c-0.4,1.4-0.7,2.8-1,4.1c-0.6,2.8-1.3,5.5-1.9,8.3l-1.5,8.4c-3.7,22.5-4,45.6-0.9,68.3c0.3,2.9,0.9,5.7,1.4,8.5   c0.5,2.8,0.9,5.7,1.7,8.4c0.6,2.8,1.3,5.6,1.9,8.4c0.8,2.8,1.6,5.5,2.4,8.3c0.7,2.8,1.8,5.5,2.7,8.2l1.4,4.1c0.5,1.4,1,2.7,1.6,4   c1.1,2.7,2.1,5.4,3.3,8c1.2,2.6,2.4,5.3,3.6,7.9c5.1,10.4,10.9,20.5,17.5,30.1c6.6,9.6,14.1,18.6,22.1,27.1c-2.2-2.5-2.5-3.1-2.2-3   c0.2,0.1,0.5,0.3,0.9,0.6c0.4,0.3,0.8,0.6,1.1,0.8c0.3,0.3,0.6,0.6,0.9,1c-0.3-0.3-0.6-0.6-0.9-1c0.5,0.4,0.7,0.4-0.3-0.8   c-1-1.1-2.9-3.5-6.7-7.9c3.8,4.4,5.8,6.8,6.7,7.9c1,1.1,0.8,1.1,0.3,0.8c-7.8-8.5-14.9-17.5-21.3-26.9   c-6.3-9.5-11.9-19.4-16.9-29.6c-1.2-2.6-2.3-5.2-3.5-7.7c-1.1-2.6-2.1-5.2-3.2-7.9c-0.5-1.3-1.1-2.6-1.5-3.9l-1.4-4l-1.4-4l-0.7-2   l-0.6-2c-0.8-2.7-1.5-5.4-2.3-8.1c-0.7-2.7-1.3-5.5-1.9-8.2c-0.3-1.4-0.7-2.7-0.9-4.1l-0.7-4.1l-0.7-4.1l-0.4-2.1l-0.3-2.1   l-1.1-8.3c-0.3-2.8-0.4-5.6-0.7-8.4c-0.1-1.4-0.2-2.8-0.3-4.2l-0.1-4.2c0-2.8-0.2-5.6-0.2-8.4l0.2-8.4l0.1-2.1l0.2-2.1l0.3-4.2   c0.3-5.6,1.2-11.1,1.9-16.6c1.8-11,4.3-21.9,7.5-32.5c3.4-10.6,7.4-20.9,12.2-31c19.3-40,50.7-74.1,89.3-96.7l7.3-4.1l7.5-3.8   c2.5-1.3,5.1-2.4,7.6-3.5l3.8-1.7c1.3-0.6,2.6-1,3.9-1.6c10.4-4.3,21.2-7.5,32.1-10.1c11-2.7,22.2-4.3,33.5-5.2   c11.3-1,22.7-0.9,34.1-0.2l-3.3-0.3l-3.3-0.1l-6.6-0.2l-1.7,0l-1.7,0l-3.3,0.1l-6.6,0.1l-6.6,0.5l-3.3,0.2l-1.7,0.1l-1.6,0.2   l-6.6,0.8c-1.1,0.1-2.2,0.3-3.3,0.4l-3.3,0.6c-17.4,2.9-34.5,7.8-50.7,14.7c-16.2,7-31.5,15.8-45.7,26.2   c-14.1,10.5-27,22.6-38.3,36c-1.5,1.6-2.8,3.4-4.2,5.1l-4.1,5.2l-3.8,5.4c-1.3,1.8-2.6,3.5-3.7,5.4c-2.3,3.7-4.8,7.3-6.9,11.2   l-3.3,5.7l-3,5.9c-2.1,3.9-3.8,7.9-5.6,11.9c-1,2-1.7,4-2.5,6.1l-2.4,6.1l-2.1,6.2c-0.7,2.1-1.5,4.1-2,6.3   c-1.2,4.2-2.5,8.4-3.4,12.7c-4,17-6.1,34.6-6.2,52.1c0,17.5,2.1,35.1,6.1,52.2c1.9,8.6,4.6,16.9,7.5,25.2c0.8,2.1,1.6,4.1,2.4,6.1   l1.2,3.1l0.6,1.5l0.7,1.5l2.7,6c0.5,1,0.9,2,1.4,3l1.5,2.9l3,5.9c1,1.9,2.2,3.8,3.3,5.7l1.6,2.9l0.8,1.4l0.9,1.4l3.6,5.6   c1.2,1.9,2.4,3.7,3.7,5.4l3.8,5.4l4.1,5.2c1.4,1.7,2.7,3.5,4.2,5.1c11.4,13.4,24.3,25.7,38.5,36.2c14.3,10.5,29.7,19.3,46,26.3   c32.7,13.8,68.8,19.9,104.6,17.1l6.7-0.5l6.7-0.9c4.5-0.5,8.9-1.4,13.3-2.2c2.2-0.3,4.4-0.9,6.6-1.4l6.6-1.5l6.5-1.9   c2.2-0.6,4.3-1.2,6.5-2c4.3-1.5,8.6-2.8,12.7-4.6c2.1-0.8,4.2-1.6,6.3-2.5l6.2-2.8l3.1-1.4l3-1.5l6.1-3.1c2-1.1,3.9-2.2,5.9-3.4   c2-1.2,4-2.2,5.9-3.5c1.3-0.8,2.8-1.8,4.4-2.8c1.6-1,3.3-2.1,5-3.4c3.5-2.5,7.3-5.1,10.9-8c1.8-1.5,3.7-2.8,5.4-4.3   c1.7-1.5,3.4-3,5-4.3c0.8-0.7,1.6-1.4,2.4-2c0.7-0.7,1.4-1.4,2.1-2c1.4-1.3,2.6-2.5,3.8-3.6c18.2-16.9,33.7-36.9,45.1-59.1   c5.7-11.1,10.6-22.6,14.4-34.5c3.7-11.9,6.4-24.1,8.2-36.5c0.3,6.4,3.2-2.7,4.3-1c0.3,0.4,0.4,1.6,0.4,3.8c0,1.1-0.1,2.5-0.3,4.2   c-0.2,1.7-0.5,3.8-0.8,6.2c-0.3,2.4-0.9,5.2-1.6,8.4c-0.3,1.6-0.7,3.3-1.1,5.1c-0.5,1.8-1,3.7-1.6,5.8c-0.6,2-1.1,4.2-1.9,6.4   c-0.8,2.2-1.6,4.6-2.4,7.1c-0.4,1.2-0.8,2.5-1.4,3.8c-0.5,1.3-1,2.6-1.6,4c-1.1,2.7-2.2,5.6-3.6,8.5c0.4,0.2,1.2,0.5,1.6,0.7   c10.9-23.5,16.5-44.8,19.7-61.3c0.4-2.1,0.8-4,1.1-5.9c0.2-0.9,0.4-1.9,0.5-2.8c0.1-0.9,0.3-1.8,0.4-2.7c0.5-3.5,1-6.6,1.5-9.4   c0.7-5.6,1.3-9.7,1.9-12.1c0.5-2.4,1-3.2,1.5-2.3c0.2,0.5,0.5,1.4,0.7,2.8c0.2,1.4,0.4,3.3,0.5,5.7c0.4,4.8,0.4,11.6-0.2,20.6   c-0.2,2.2-0.4,4.6-0.7,7.1c-0.1,1.3-0.2,2.5-0.4,3.9c-0.2,1.3-0.4,2.7-0.6,4c-0.2,1.4-0.4,2.8-0.7,4.3c-0.2,1.4-0.4,3-0.8,4.5   c-0.6,3-1.3,6.2-2,9.5c-7,29.5-20.5,60.3-41.4,88c-10.4,13.8-22.6,26.9-36.3,38.7c-13.7,11.8-28.9,22.3-45.5,30.9   c-16.5,8.6-34.1,15.5-52.4,20.3c-18.3,4.7-37.3,7.3-56.3,7.7c-19,0.4-38.1-1.2-56.6-5.1c-18.5-3.9-36.5-9.8-53.4-17.6   c-24.5-11.4-47.3-26.8-66.8-45.6c-9.8-9.4-18.8-19.5-27-30.4c-8.1-10.9-15.3-22.4-21.5-34.5c-1.5-3-3.1-6-4.5-9.1l-2.1-4.6   c-0.7-1.5-1.4-3.1-2-4.7l-3.7-9.5l-3.3-9.6c-4.1-12.9-7.1-26.2-9-39.6l-1.2-10.1l-0.7-10.1l-0.2-2.5l-0.1-2.5l-0.1-5.1l-0.1-5.1   l0.2-5.1l0.2-5.1l0.1-2.5l0.2-2.5l0.8-10.1l1.4-10.1c0.2-1.7,0.5-3.3,0.8-5l0.9-5c0.8-4.6,2-9.1,3.1-13.7c0.5-2.3,1.2-4.5,1.9-6.8   c0.7-2.2,1.3-4.5,2-6.8c0.7-2.2,1.5-4.4,2.3-6.7l1.2-3.3c0.4-1.1,0.8-2.2,1.2-3.3c0.9-2.2,1.8-4.4,2.6-6.6l1.3-3.3l1.5-3.2   c1-2.2,2-4.3,3-6.5c1-2.2,2.2-4.2,3.2-6.3c1.1-2.1,2.1-4.2,3.3-6.3c1.2-2.1,2.4-4.1,3.6-6.2l1.8-3.1l1.9-3l3.9-6   c1.3-2,2.8-3.9,4.2-5.9l2.1-2.9c0.7-1,1.4-1.9,2.2-2.9c11.7-15.2,25.2-29.2,40.1-41.4c15-12.2,31.5-22.6,48.9-31.1   c17.5-8.3,36-14.6,54.8-18.6c18.9-4.1,38.2-5.6,57.3-5.1c19.1,0.5,38,3.3,56.2,8.1c18.2,5,35.6,12,51.8,20.7   c11.8,6.3,25.3,14.8,38.4,25.2c13.1,10.4,25.8,22.7,36.4,35.6c10.7,12.9,19.4,26.3,25.7,38.1c3,6,5.8,11.4,7.8,16.2   c1,2.4,2,4.6,2.8,6.6c0.7,2,1.4,3.9,1.9,5.5c6.1,18.2,4.8,19.3,3.1,16.8c-6.5-20.7-15.6-40.7-27.5-58.8c-2.8-4.6-6.1-9-9.2-13.4   c-1.6-2.2-3.3-4.3-5-6.4l-2.5-3.2l-2.7-3.1c-6.9-8.3-14.7-15.9-22.6-23.2c-32.1-29-72.3-48.7-114.4-56.9c-12.9-2.7-26-4-39.2-4.4   c-6.6-0.3-13.2-0.1-19.7,0.1l-9.9,0.7c-1.6,0.1-3.3,0.3-4.9,0.5l-4.9,0.6c-13.1,1.7-26,4.5-38.6,8.3c-12.6,3.9-24.9,8.8-36.7,14.6   l-4.4,2.2l-2.2,1.1c-0.7,0.4-1.4,0.8-2.2,1.2c-2.9,1.6-5.8,3.2-8.6,4.9l-8.4,5.3c-1.4,0.9-2.7,1.9-4.1,2.8l-4.1,2.8   c-10.7,7.7-20.8,16.3-30.2,25.6l-6.9,7.1l-6.6,7.5c-1.1,1.2-2.1,2.5-3.2,3.8l-3.1,3.9c-2.1,2.5-4,5.3-5.9,8   c-7.7,10.8-14.6,22.1-20.5,34c5.8-11.6,12.6-22.7,20.2-33.3l2.9-4l1.4-2l1.5-1.9c2-2.5,4.1-5.1,6.1-7.6c2.2-2.4,4.3-4.9,6.5-7.3   c2.2-2.4,4.5-4.7,6.8-7.1c9.2-9.3,19.2-17.8,29.8-25.6c2.7-1.9,5.4-3.8,8.1-5.7c2.8-1.8,5.6-3.5,8.3-5.3c1.4-0.9,2.8-1.7,4.3-2.5   l4.3-2.4c1.4-0.8,2.8-1.7,4.3-2.4l4.4-2.2c11.8-5.9,24.1-11,36.7-14.9c12.7-3.9,25.7-6.8,38.9-8.6c13.2-1.9,26.5-2.5,39.9-2.2   c13.3,0.4,26.7,1.7,39.8,4.4c42,8.3,81.7,28,113.4,56.6c31.8,28.5,56,65.4,68.7,106.1c-1.9-2.7-3.7-5.2-2.9,0c0,0,0.1,0.4,0.4,1.1   c0.2,0.7,0.6,1.7,1,3c0.7,2.5,1.7,6.1,2.8,10c0.9,4,2,8.3,2.9,12.5c0.7,4.2,1.5,8.2,2,11.4c0.5,6.5,1,12,1,16.5c0,2.3,0,4.3,0,6.2   c0,1.8-0.2,3.5-0.3,4.9c-0.5,5.7-1.1,8.1-1.8,8.1c-0.7,0-1.4-2.4-2.2-6.3c-0.2-1-0.4-2.1-0.6-3.2c-0.2-1.2-0.4-2.4-0.6-3.7   c-0.5-2.6-1-5.6-1.5-8.7c-0.2-1.6-0.6-3.2-0.9-4.9c-0.3-1.7-0.7-3.4-1-5.2c-0.2-0.9-0.4-1.8-0.5-2.7c-0.2-0.9-0.5-1.8-0.7-2.7   C726.6,485.6,726.1,483.7,725.7,481.8z" />
        </g>
      </svg>
    );
  }
}
