import React, {Component} from 'react';
import Expert from "./Expert";


class Product extends from Component{
  constructor(props){
    super(props);
    this.state= {}
  }

  render(){
    return(

          <div className="products">
          <div>
            <h2>Titulo</h2>
          </div>
          <div>
            <video src="">test</video>
          </div>
          <div>
            <div>expert</div>
            <div>
            <p>description</p>
             <button>buy</button>
             </div>
          </div>
          </div>

    )
  }
}


export default Product;

