import React, {Component} from 'react';
import Product from '../components/Product';


class Products extends Component {
  constructor(props){
    super(props);
    this.state= {
      products:[]
    }

  }
  componentDidMount(){
    getProducts
  }

  render(){
    return(
      <div>
        <div className="product1">
          <h1>Digit4u</h1>
          <p>loren ipsum</p>
        </div>
        <div className="product2">
          {this.state.products.map(product => return <Product />)}
        </div>
      </div>
    )
  }
}


export default Products;
