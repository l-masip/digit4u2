import React, { Component } from "react";
import './footer.css'

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <footer className='footer'>
        <ul>
          <li>
            <a href="#">
              <img src="/images/facebook (1).png" alt="fb" className='footer-icons'/>
            </a>
          </li>
          <li>
            <a href="#">
              <img src="/images/linkedin (3).png" alt="lk" className='footer-icons'/>
            </a>
          </li>
          <li>
            <a href="#">
              <img src="/images/instagram (1).png" alt="ig" className='footer-icons'/>
            </a>
          </li>
        </ul>
        <a href="/contact-us" className='links-nav'>Contact Us</a>
      </footer>
    );
  }
}

export default Footer;
