import React, { Component } from 'react';
import ProductService from '../services/product.service';

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
    const { name, description, video_demo, price, category, expert } =
      this.state.product;
      console.log('PROPS', this.props);
    return (
      <div className="products">
        <div>
          <h2>{this.props.name}</h2>
        </div>
        <div>
          <video src={video_demo}>test</video>
        </div>
        <div>
          <div>{expert}</div>
          <div>
            <p>{category}</p>
            <p>{description}</p>
            <p>{price}</p>
            <button>buy</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Product;
