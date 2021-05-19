import React, { Component } from "react";
import './homepage.css'

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className='homepage'>
        <div className="intro">
          <h1>Digital Transformation and Digitization of Companies</h1>
          <p>
            Is it difficult for you to visualize the future of your company? You
            want transform your business? Do you know the steps you have to take
            to digitize your company? Do you want to face your digital
            challenges? We want to accompany you in your digital transformation
            We want to be you digital agency
          </p>
        </div>
        <div className="home-div">
          <div className="home-object">
            <h2>Products</h2>
            <img
              className="homepage-img"
              src="https://cdn.kometia-static.com/blog/2020/07/24133307/shutterstock_507077239.jpg"
              alt="product"
            />
            <p>
              We thought based on the experience of working with our clients,
              although each company and project has its particularity and since
              we will make you a tailored suit, so to speak, take them as a
              guide.
            </p>
            <a href="/products">Find out more</a>
          </div>
          <div className="home-object">
            <h2>blog</h2>
            <img
              className="homepage-img"
              src="https://www.blogdigital.mx/images/2018/11/12/blog_digital_como_iniciar_un_blog_rentable_large.png"
              alt="blog"
            />
            <p>
              Find the latest trends of the digital age enjoying various
              articles related to digitization
            </p>
            <a href="/articles">Update yourself here</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Homepage;
