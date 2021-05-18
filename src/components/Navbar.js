import React, { Component } from 'react';
import { withAuth } from "../context/auth.context";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
    };
  }
  
  handleSubmit(event) {
    event.preventDefault();
    this.props.logout(this.state.fields);
  }

  render() {
    return (
      <nav className="navbar">
        <div className="navbar-logo">
          <a href="/" className="logo">
            Digit4U
          </a>
        </div>

        {this.props.isLoggedIn ? (
          <React.Fragment>
          <div className="navbar-links">
            <a href="/" className="links-nav" onClick={(e) => this.handleSubmit(e)}>
              Logout
            </a>
            <a href="/userhomepage" className="links-nav">
              Profile
            </a>
          </div>
        </React.Fragment>
        ) : (
          <React.Fragment>
            <div className="navbar-links">
              <a href="/signup" className="links-nav">
                Sign Up
              </a>
              <a href="/login" className="links-nav">
                Login
              </a>
            </div>
          </React.Fragment>
        )}
      </nav>
    );
  }
}

export default withAuth(Navbar);
