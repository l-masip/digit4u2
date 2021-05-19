import React, { Component } from "react";
import ReactPlayer from 'react-player'
import ProductService from "../services/product.service";

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
          <a href='#'><h2>{this.props.name}</h2></a>
          <ReactPlayer url={this.props.video_demo} />
        </div>
    );
  }
}

export default SmallProduct;