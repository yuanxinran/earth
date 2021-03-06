import React, { Component } from 'react';
import { getItems, getItem } from './water.js';

class Steps extends Component {
  constructor(props) {
    super(props);
    this.state = {
      translateX: 0,
      translateY: 0,
      tips: getItem(1),
      id: 'step1'
    };
    this.handleHover = this.handleHover.bind(this);
    this.getContent = this.getContent.bind(this);
  }

  state = {};

  getContent() {
    if (this.state.tips != null) {
      return (
        <div style={{ height: '300px' }}>
          <div
            className="card"
            style={{
              width: '30%',
              marginLeft: `${this.state.translateX}`,
              transform: `translate(0,${this.state.translateY})`,
              padding: '10px',
              backgroundColor: '#e6f7ff',
              borderColor: 'transparent'
            }}
          >
            <div className="card-body" style={{ textAlign: 'left' }}>
              <div
                style={{
                  color: '#2952a3',
                  overflow: 'visible'
                }}
              >
                {this.state.tips.name}
              </div>
              <div>
                {/* <div className="col-sm-3">
                  <img src={this.state.tips.img} style={{ width: '100%' }} />
                </div> */}
                <div className="wrong">{this.state.tips.wrong}</div>
                <div className="right">{this.state.tips.right}</div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }

  handleHover(num) {
    var pre = this.state.id;
    var tip = getItem(num);
    var x = tip.x;
    var step = 'step' + num;
    this.setState({
      tips: tip,
      translateX: x,
      translateY: tip.y,
      id: step
    });
    if (pre != null) {
      document.getElementById(pre).classList.remove('active-step');
    }
    document.getElementById(step).classList.add('active-step');
  }
  render() {
    return (
      <React.Fragment>
        <svg
          id="Layer_1"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 720 110"
        >
          <defs />
          <g transform="translate(-39.74 -19.42)">
            <g id="step1" className="active-step">
              <path
                className="cls-1"
                d="M98.61,64l9.56,4.61a10.23,10.23,0,0,1,2.89-2.77,28.14,28.14,0,0,0,6-4.69,9.79,9.79,0,0,0,3-6.73,5.67,5.67,0,0,0-1.4-3.62c-1.51-1.62-4-1.89-6.18-1.43-3.36.67-6.85,3.59-8.47,5.51a31,31,0,0,0-4.4,7C99.28,62.5,98.93,63.22,98.61,64Z"
              />
              <path
                className="cls-1"
                d="M97.68,66.36c-.2.54-.38,1.11-.53,1.65-.6,2-1,3.83-.63,5.35a4.54,4.54,0,0,0,3.68,3.1c2,0,3.26-1.42,4.38-2.8.84-1.07,1.43-1.93,2.1-2.92Z"
              />
              <path
                className="cls-1"
                d="M108.26,89.29l-3.63-9.91a9.71,9.71,0,0,0,3-2.6,31.22,31.22,0,0,1,5.27-5.51A10,10,0,0,1,120,69a5.56,5.56,0,0,1,3.47,1.73c1.44,1.68,1.49,4.14.84,6.29-1,3.29-4.22,6.46-6.34,7.86a31.83,31.83,0,0,1-7.38,3.69C109.79,88.82,109,89.06,108.26,89.29Z"
              />
              <path
                className="cls-1"
                d="M105.84,90l-1.68.36c-2.11.37-3.91.67-5.42.11a4.49,4.49,0,0,1-2.72-4c.14-2,1.69-3.11,3.2-4.1a36.12,36.12,0,0,1,3.14-1.79Z"
              />
            </g>
            <g id="step2">
              <path
                className="cls-2"
                d="M199.27,35.8l3.1,11.53a12,12,0,0,1,4.52.46,32.68,32.68,0,0,0,8.44,1.69c2.88.14,5.93-.46,8-2.34a6.25,6.25,0,0,0,2.08-3.83c.29-2.47-1.3-4.78-3.33-6.33-3-2.38-8.14-3.23-11-3.22a34.93,34.93,0,0,0-9.23,1.32C201,35.31,200.16,35.53,199.27,35.8Z"
              />
              <path
                className="cls-2"
                d="M196.54,36.76a17.13,17.13,0,0,0-1.81.74c-2.21,1-4,1.93-5.07,3.36a5,5,0,0,0,.05,5.4C191.13,48,193.34,48,195.35,48c1.54-.06,2.72-.18,4.06-.33Z"
              />
              <path
                className="cls-2"
                d="M184.61,62.52l5.85-10.33a11.28,11.28,0,0,0,4.48.7,35.32,35.32,0,0,1,8.64.49,11.33,11.33,0,0,1,7.18,4.32,6.19,6.19,0,0,1,1.08,4.23c-.39,2.45-2.47,4.28-4.8,5.3-3.56,1.55-8.67,1.1-11.45.31A35.87,35.87,0,0,1,187,63.92C186.15,63.48,185.38,63,184.61,62.52Z"
              />
              <path
                className="cls-2"
                d="M182.22,61l-1.56-1.17c-1.87-1.53-3.46-2.86-4.09-4.55A5,5,0,0,1,178,50c1.79-1.31,3.93-.82,5.9-.26,1.46.44,2.6.88,3.84,1.38Z"
              />
            </g>
            <g id="step3">
              <path
                className="cls-1"
                d="M336,108.39l5.41-20.48a21.94,21.94,0,0,0,8.16-.93,60.1,60.1,0,0,1,15.22-3.22c5.2-.34,10.71.64,14.52,3.91a11,11,0,0,1,3.81,6.72c.55,4.37-2.28,8.49-5.92,11.29-5.48,4.3-14.66,5.94-19.81,6a65.07,65.07,0,0,1-16.7-2.08C339.21,109.21,337.61,108.85,336,108.39Z"
              />
              <path
                className="cls-1"
                d="M331.05,106.77a31.17,31.17,0,0,1-3.27-1.26c-4-1.69-7.35-3.31-9.2-5.81s-1.91-7.32,0-9.56c2.54-3.07,6.53-3.2,10.16-3.18,2.79.08,4.92.26,7.35.49Z"
              />
              <path
                className="cls-1"
                d="M309.14,61.53l10.72,18.11a21,21,0,0,1,8.08-1.37,64.35,64.35,0,0,0,15.58-1.09c5.06-1.14,10.09-3.63,12.91-7.84a10.94,10.94,0,0,0,1.88-7.5c-.74-4.34-4.52-7.52-8.74-9.26-6.46-2.63-15.67-1.71-20.68-.22A65.86,65.86,0,0,0,313.39,59C311.9,59.79,310.52,60.66,309.14,61.53Z"
              />
              <path
                className="cls-1"
                d="M304.84,64.35l-2.79,2.12c-3.36,2.75-6.2,5.14-7.32,8.15s.13,7.53,2.62,9.21c3.25,2.26,7.1,1.34,10.65.28a72.5,72.5,0,0,0,6.93-2.54Z"
              />
            </g>
            <g id="step4">
              <path
                className="cls-2"
                d="M448.68,33.41l3.79,15.85a14,14,0,0,1,5.79.56A39.07,39.07,0,0,0,469.07,52c3.69.15,7.62-.72,10.33-3.34a9.16,9.16,0,0,0,2.73-5.32c.4-3.42-1.6-6.57-4.18-8.68-3.88-3.24-10.4-4.33-14.06-4.27a42.76,42.76,0,0,0-11.87,2C451,32.7,449.82,33,448.68,33.41Z"
              />
              <path
                className="cls-2"
                d="M445.15,34.77a22.16,22.16,0,0,0-2.32,1c-2.86,1.39-5.23,2.72-6.56,4.71s-1.38,5.75,0,7.45c1.79,2.34,4.63,2.36,7.21,2.27,2-.11,3.49-.3,5.22-.52Z"
              />
              <path
                className="cls-2"
                d="M429.46,70.47l7.66-14.33a13.4,13.4,0,0,0,5.74.9,41.53,41.53,0,0,1,11.07.54c3.6.78,7.16,2.62,9.15,5.84a9,9,0,0,1,1.32,5.81c-.54,3.4-3.24,6-6.24,7.4-4.6,2.18-11.14,1.65-14.69.59a43.41,43.41,0,0,1-11-4.85C431.42,71.78,430.44,71.12,429.46,70.47Z"
              />
              <path
                className="cls-2"
                d="M426.41,68.36l-2-1.59c-2.37-2.08-4.39-3.88-5.17-6.21s.11-5.87,1.88-7.22c2.32-1.84,5.06-1.19,7.57-.44a48,48,0,0,1,4.92,1.84Z"
              />
            </g>
            <g id="step5">
              <path
                className="cls-1"
                d="M545.65,48.58l19.52,18.64a17.77,17.77,0,0,1,7.31-4.34,49,49,0,0,0,14.73-6.48c4.46-3,8.22-7.71,8.9-13.74a17.15,17.15,0,0,0-1.87-9.79c-2.78-5.08-8.12-7.69-13.14-8.34-7.62-1.06-16.29,3.17-20.51,6.48a57,57,0,0,0-12,13.19C547.64,45.6,546.62,47,545.65,48.58Z"
              />
              <path
                className="cls-1"
                d="M542.82,53.58a34.5,34.5,0,0,0-1.72,3.51c-2,4.46-3.52,8.39-3.18,12.32s3.85,9.18,7.06,10.35c4.32,1.66,7.66-.81,10.6-3.21,2.2-1.91,3.8-3.5,5.6-5.34Z"
              />
              <path
                className="cls-1"
                d="M558.44,116.93l-4.67-26.64a17.05,17.05,0,0,0,7.57-3.81,52.81,52.81,0,0,1,13.46-9c4.94-2.09,10.86-2.68,16.26,0a16.44,16.44,0,0,1,7.07,6.9c2.6,5.17,1.87,11.1-.26,15.74-3.31,7.09-11.46,12.12-16.62,13.79a56.43,56.43,0,0,1-17.48,3C562,117,560.21,117,558.44,116.93Z"
              />
              <path
                className="cls-1"
                d="M552.87,116.69l-3.83-.46c-4.76-.78-8.83-1.51-12-4s-5.45-8.24-4.67-11.68c1-4.59,4.78-6.11,8.43-7.29a61.67,61.67,0,0,1,7.5-1.79Z"
              />
            </g>
            <g id="step6">
              <path
                className="cls-2"
                d="M706.29,93.72l-2.13-17.83a12.61,12.61,0,0,0,5.36-2.29,34.71,34.71,0,0,1,9.56-5.49,13.41,13.41,0,0,1,11.12.48,11.12,11.12,0,0,1,4.55,4.8c1.62,3.48.85,7.4-.85,10.38-2.55,4.55-8.4,7.63-11.94,8.64a39.62,39.62,0,0,1-12.09,1.42C708.73,93.8,707.53,93.79,706.29,93.72Z"
              />
              <path
                className="cls-2"
                d="M702.42,93.33a22.71,22.71,0,0,1-2.62-.43c-3.24-.63-6-1.33-8-3s-3.41-5.65-2.73-7.84c.87-3,3.58-3.86,6.09-4.52,1.94-.46,3.46-.71,5.2-1Z"
              />
              <path
                className="cls-2"
                d="M674.39,60.3,687,73.16a12.08,12.08,0,0,1,5.17-2.64,37.31,37.31,0,0,0,10.42-3.83,13.3,13.3,0,0,0,6.65-8.85,10.6,10.6,0,0,0-.85-6.51c-1.74-3.42-5.26-5.32-8.66-6-5.21-.95-11.29,1.54-14.31,3.7a39.77,39.77,0,0,0-8.78,8.35C675.79,58.35,675.09,59.33,674.39,60.3Z"
              />
              <path
                className="cls-2"
                d="M672.24,63.43l-1.33,2.25c-1.52,2.89-2.79,5.39-2.7,8.07s2.24,6.16,4.43,7.06c2.89,1.26,5.28-.23,7.42-1.76a46.39,46.39,0,0,0,4.05-3.38Z"
              />
            </g>
          </g>

          <rect
            id="_1"
            data-name="1"
            className="cls-4"
            x="27.85"
            y="1.06"
            width="85.72"
            height="103.98"
            onMouseEnter={() => this.handleHover(1)}
          />
          <rect
            id="_2"
            data-name="2"
            className="cls-4"
            x="119.87"
            y="0.87"
            width="85.72"
            height="103.98"
            onMouseEnter={() => this.handleHover(2)}
          />
          <rect
            id="_3"
            data-name="3"
            className="cls-4"
            x="232.33"
            width="120.84"
            height="103.98"
            onMouseEnter={() => this.handleHover(3)}
          />
          <rect
            id="_4"
            data-name="4"
            className="cls-4"
            x="365.28"
            y="1.06"
            width="91.51"
            height="103.98"
            onMouseEnter={() => this.handleHover(4)}
          />
          <rect
            id="_5"
            data-name="5"
            className="cls-4"
            x="468.89"
            width="120.01"
            height="103.98"
            onMouseEnter={() => this.handleHover(5)}
          />
          <rect
            id="_6"
            data-name="6"
            className="cls-4"
            x="603.93"
            y="0.87"
            width="103.98"
            height="103.98"
            onMouseEnter={() => this.handleHover(6)}
          />
        </svg>
        {this.getContent()}
      </React.Fragment>
    );
  }
}

export default Steps;
