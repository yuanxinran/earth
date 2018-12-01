import React, { Component } from 'react';
import { Flipper, Flipped } from 'react-flip-toolkit';
import '../style/square.css';
import { runInThisContext } from 'vm';

const colors = ['#D2F2FF', '#DEDEDE', '#D0E6BF'];

class AnimatedSquare extends Component {
  constructor(props) {
    super(props);
  }
  state = { focused: undefined };
  render() {
    return (
      <Flipper flipKey={this.state.focused} duration={750}>
        <main>
          {typeof this.state.focused === 'object' ? (
            <React.Fragment>
              {this.props.items.map(item =>
                item == this.state.focused ? (
                  <Flipped flipId={this.state.focused.color}>
                    <div
                      className="focusedItem item"
                      style={{ backgroundColor: this.state.focused.color }}
                      onClick={() => this.setState({ focused: undefined })}
                    >
                      <Flipped
                        inverseFlipId={this.state.focused.color}
                        transformOrigin="0 0"
                      >
                        <div>
                          <Flipped
                            flipId={`${this.state.focused.color}-text`}
                            translate
                          >
                            <span>{this.state.focused.name}</span>
                          </Flipped>
                        </div>
                      </Flipped>
                    </div>
                  </Flipped>
                ) : (
                  <Flipped flipId={item.color}>
                    <div
                      className="shrink item"
                      style={{ backgroundColor: item.color }}
                      onClick={() => this.setState({ focused: null })}
                    >
                      <Flipped inverseFlipId={item.color} transformOrigin="0 0">
                        <div>
                          <Flipped flipId={`${item.color}-text`} translate>
                            <span>{item.name}</span>
                          </Flipped>
                        </div>
                      </Flipped>
                    </div>
                  </Flipped>
                )
              )}
            </React.Fragment>
          ) : (
            <ul className="list">
              {this.props.items.map(item => (
                <Flipped flipId={item.color}>
                  <li
                    className="listItem"
                    style={{ backgroundColor: item.color }}
                    onClick={() => this.setState({ focused: item })}
                  >
                    <Flipped inverseFlipId={item.color}>
                      <div>
                        <Flipped flipId={`${item.color}-text`} translate>
                          <span>{item.name}</span>
                        </Flipped>
                      </div>
                    </Flipped>
                  </li>
                </Flipped>
              ))}
            </ul>
          )}
        </main>
      </Flipper>
    );
  }
}

export default AnimatedSquare;
