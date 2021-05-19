import React, { Component } from 'react'
import { withAuth } from '../context/auth.context';
import User from '../components/User';
import UserService from '../services/user.service';
import AuthService from '../services/auth.services';
import userEvent from '@testing-library/user-event';

class UserHomepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
    this.userService = new UserService();
    this.authService = new AuthService();
  }
  refreshState() {
    this.userService
      .getUser()
      .then((response) => {
        console.log(response.data);
        this.setState({ user: response.data });
      })
      .catch((err) => console.error(err));
  }

  componentDidMount() {
    this.refreshState();
    console.log(this.props);3
  }

  displayUser() {
    const { users } = this.state;
    return users.map(users => {
      return (
        <User
          refreshState={() => this.refreshState()}
          key={userEvent.id}
          {...userEvent}
        />
      );
    });
  }

  render() {
    return (
      <div>
      {this.displayUser()}
      </div>
    );
  }
}

export default withAuth(UserHomepage);
