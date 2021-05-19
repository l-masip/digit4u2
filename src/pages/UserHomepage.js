import React, { Component } from 'react'
import { withAuth } from '../context/auth.context';
import User from '../components/User';
import UserService from '../services/user.service';
import AuthService from '../services/auth.services';

class UserHomepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
    };
    this.userService = new UserService();
    this.authService = new AuthService();
  }

  refreshState() {
    console.log("user id", this.props.user.id)
    this.userService
      .getUser(this.props.user.id)
      .then((response) => {
        console.log("res.data", response.data);
        this.setState({ user: response.data });
      })
      .catch((err) => console.error(err));
  }

  componentDidMount() {
    this.refreshState();
    console.log(this.props);
  }

 

  render() {
    return (
      <div>
        <User {...this.state.user}/>
      </div>
    );
  }
}

export default withAuth(UserHomepage);
