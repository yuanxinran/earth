import React, { Component } from "react";
import { Flipper, Flipped } from "react-flip-toolkit";
import "../style/square.css";

const colors = ["#ff4f66", "#7971ea", "#5900d8"];

class AnimatedSquare extends Component {
  state = { focused: undefined };
  render() {
    return (
      <Flipper flipKey={this.state.focused} duration={750}>
        <main>
          {typeof this.state.focused === "string" ? (
            <React.Fragment>
              {colors.map(color =>
                color == this.state.focused ? (
                  <Flipped flipId={this.state.focused}>
                    <div
                      className="focusedItem item"
                      style={{ backgroundColor: this.state.focused }}
                      onClick={() => this.setState({ focused: null })}
                    >
                      <Flipped
                        inverseFlipId={this.state.focused}
                        transformOrigin="0 0"
                      >
                        <div>
                          <Flipped
                            flipId={`${this.state.focused}-text`}
                            translate
                          >
                            <span>{this.state.focused}</span>
                          </Flipped>
                        </div>
                      </Flipped>
                    </div>
                  </Flipped>
                ) : (
                  <Flipped flipId={color}>
                    <div
                      className="shrink item"
                      style={{ backgroundColor: color }}
                      onClick={() => this.setState({ focused: null })}
                    >
                      <Flipped inverseFlipId={color} transformOrigin="0 0">
                        <div>
                          <Flipped flipId={`${color}-text`} translate>
                            <span>{this.state.focused}</span>
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
              {colors.map(color => (
                <Flipped flipId={color}>
                  <li
                    className="listItem"
                    style={{ backgroundColor: color }}
                    onClick={() => this.setState({ focused: color })}
                  >
                    <Flipped inverseFlipId={color}>
                      <div>
                        <Flipped flipId={`${color}-text`} translate>
                          <span>{color}</span>
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
