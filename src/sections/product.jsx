import React, { Component } from 'react';
import ProductUse from '../components/product/use.jsx';
import Buy from '../components/product/buy.jsx';
import '../style/tree.css';
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
        <div className="buy section">
          <Buy />
        </div>

        <div className="save section" />
      </div>
    );
  }
}

export default Product;
