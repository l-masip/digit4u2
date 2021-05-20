import React, { Component } from "react";
import ReactPlayer from "react-player";
import ProductService from "../services/product.service";
import './userhome.css';

class SmallProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {},
    };
    this.productService = new ProductService();
  }

  render() {
    console.log("PROPS", this.props);
    return (
      <div className="products">
          <h2>{this.props.name}</h2>
        <div className="product-vid">
          <ReactPlayer className="product-vid" max-width="350px" url={this.props.video_demo} />
        </div>
      </div>
    );
  }
}

export default SmallProduct;
