import React, { Component } from "react";
import ProductService from "../services/product.service";

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {},
    };
    this.productService = new ProductService();
  }

  // getProducts() {
  //   this.productService
  //     .then((response) => {
  //       this.setState({ product: response.data });
  //     })
  //     .catch((err) => console.error(err));
  // }
  // componentDidMount() {
  //   this.getProducts();
  // }

  render() {
    // const { name, description, video_demo, price, category, expert } =
    //   this.state.product;
    console.log("PROPS", this.props);
    return (
      <div className="products">
        <div>
          <h2>{this.props.name}</h2>
        </div>
        <div>
          <video width="320" height="240" controls>
            <source src={this.props.video_demo} />
          </video>
        </div>
        <div>
          <div>
            <p>{this.props.category}</p>
            <p>{this.props.description}</p>
            <div>
              <h4>
                {this.props.expert.name} {this.props.expert.surname}
              </h4>
              <div>{this.props.expert.img}</div>
              <p>{this.props.expert.description}</p>
            </div>
            <p>{this.props.price}</p>
            <button>Buy</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Product;
