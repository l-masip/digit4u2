import React, { Component } from 'react';
import UserService from '../services/user.service';
import {withAuth} from "../context/auth.context";

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
    };
    this.userService = new UserService();
  }

  render() {
    const {user}= this.props;

    return (
      <div className="user">
        <div>
          <h2>
            {user.name} {user.surname}
          </h2>
          <p>{user.position}</p>
          <p>{user.phone}</p>
        </div>
        <div>
          <p>{user.products}</p>
        </div>
      </div>
    );
  }
}

export default withAuth(User);
