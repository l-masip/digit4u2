import React, {Component} from 'react';



class Homepage extends Component {
  constructor(props){
    super(props);
    this.state= {};

  }

  render(){
    return (
      <div>
        <div className="home1">
          <h1>Digit4u</h1>
          <p>loren ipsum</p>
        </div>
        <div className="home2">
          <div className="home-products">
            <h2>products</h2>
            <img> </img>
            <p>description</p>
            <a href="/products">haz click aqui</a>
          </div>
          <div className="home-blog">
            <h2>blog</h2>
            <img> </img>
            <p>description</p>
            <a href="/products">haz click aqui</a>
          </div>
        </div>
      </div>
    );
  }
}


export default Homepage;
