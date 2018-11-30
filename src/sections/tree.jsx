import React, { Component } from 'react';
import AnimatedSquare from '../components/square.jsx';
import '../style/tree.css';
import Plx from 'react-plx';

class Tree extends Component {
  state = {};
  render() {
    return (
      <div className="tree section">
        <div className="intro" id="tree-intro">
          <h1>Save Trees</h1>
        </div>
        <div className="data">
          <div className="data-list">
            <iframe
              height="100"
              src="http://www.theworldcounts.com/counters/how_consumerism_affects_the_environment/environmental_effects_of_paper_production/embed?background_color=white&color=black&font_family=%22Helvetica+Neue%22%2C+Arial%2C+sans-serif&font_size=14&token=f84bdade845d6c612d08a697be0d72c395462e10"
              style={{ border: 'none' }}
              width="300"
            />
          </div>

          <div className="data-list">
            <iframe
              height="100"
              src="http://www.theworldcounts.com/counters/degradation_and_destruction_of_ecosystems/facts_on_deforestation/embed?background_color=white&color=black&font_family=%22Helvetica+Neue%22%2C+Arial%2C+sans-serif&font_size=14&token=f84bdade845d6c612d08a697be0d72c395462e10"
              style={{ border: 'none' }}
            />
          </div>

          <div className="data-list">
            <iframe
              height="100"
              src="http://www.theworldcounts.com/counters/degradation_and_destruction_of_ecosystems/facts_on_deforestation/embed?background_color=white&color=black&font_family=%22Helvetica+Neue%22%2C+Arial%2C+sans-serif&font_size=14&token=f84bdade845d6c612d08a697be0d72c395462e10"
              style={{ border: 'none' }}
            />
          </div>
        </div>

        <div className="col-sm-12 tip-content">
          <div className="square">
            <AnimatedSquare />
            <AnimatedSquare />
            <AnimatedSquare />
          </div>
        </div>
      </div>
    );
  }
}

export default Tree;
