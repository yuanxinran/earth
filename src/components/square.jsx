import React, { Component } from 'react';
import '../style/square.scss';

class Categories extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    selected: 0
  };
  render() {
    var parent = this;
    return (
      <React.Fragment>
        {this.props.items.map(function(cat, i) {
          return (
            <div className="cat" key={i}>
              <div
                className="title"
                style={{ backgroundColor: `${cat.color}` }}
              >
                <div>{cat.name}</div>
              </div>

              <div
                className="description"
                style={{
                  borderColor: `${cat.color}`
                }}
              >
                <div>{cat.description}</div>
              </div>
              <div className="img" style={{}}>
                <img src={cat.img} />
              </div>
            </div>
          );
        })}
      </React.Fragment>
    );
  }
}

export default Categories;
