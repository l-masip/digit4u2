import React, {Component} from 'react';


class Footer extends Component{
  constructor(props){
    super (props);
    this.state={}
  }

  render(){
    return (
      <div>
        <ul>
          <li>
            <a href="#">
              <img src="fb" alt="fb" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="lk" alt="lk" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="ig" alt="ig" />
            </a>
          </li>
        </ul>
        <a href="/contact-us">Contact Us</a>
      </div>
    );
  }
}



export default Footer;

