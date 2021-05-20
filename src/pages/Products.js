import React, { Component } from 'react';
import Product from '../components/Product';
import { withAuth } from '../context/auth.context';
import ProductService from '../services/product.service';

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
    this.productService = new ProductService();
  }

  refreshState() {
    this.productService
      .getProducts()
      .then((response) => {
        console.log(response.data);
        this.setState({ products: response.data });
      })
      .catch((err) => console.error(err));
  }

  componentDidMount() {
    this.refreshState();
  }

  displayProducts() {
    const { products } = this.state;

    if (products) {
      console.log(products);
      return products.map((product) => {
        return (
          <Product
            refreshState={() => this.refreshState()}
            key={product.id}
            {...product}
          />
        );
      });
    }
  }

  render() {
    return <div>{this.displayProducts()}</div>;
  }
}

export default withAuth(Products);
