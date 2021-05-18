import React, { Component } from 'react';
import UserService from '../services/user.service';

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
    };
    this.userService = new UserService();
  }

  render() {


    return (
      <div className="user">
        <div>
          <h2>
            {this.props.name} {this.props.surname}
          </h2>
          <p>{this.props.position}</p>
          <p>{this.props.phone}</p>
        </div>
        <div>
              <p>{this.props.products}</p>
        </div>
      </div>
    );
  }
}

export default User;
