import React, { Component } from "react";
import UserService from "../services/user.service";
import SampleProduct from "./SampleProduct";
import { withAuth } from "../context/auth.context";
import { Link } from "react-router-dom";
import './userhome.css';

class User extends React.Component {
  userService = new UserService();

  deleteUser = () => {
    this.userService
      .deleteUser(this.props.id)
      .then(() => {
        console.log("Deleted");
        window.location.replace("/");
      })
      .catch((err) => console.error(err));
  };

  componentDidMount() {}

  displayProducts = () => {
    if (this.props.products) {
      return this.props.products.map((product) => {
        return (
          <SampleProduct
            refreshState={() => this.refreshState()}
            key={product.id}
            {...product}
          />
        );
      });
    }
  };

  render() {
    console.log("products in user.js", this.props.products);
    return (
      <div className="user">
        <div className="user-title">
          <h2>
            {this.props.name} {this.props.surname}
          </h2>
          <p>Position: {this.props.position}</p>
          <p>Phone: {this.props.phone}</p>
        </div>
        <div className="user-products">
          <p>Your selected products</p>
          {this.props.products && this.displayProducts()}
        </div>
        <Link className="edit-link" to={`/editUser/${this.props.id}`}>
          Edit your profile
        </Link>
        <button className="form-btn" onClick={() => this.deleteUser()}>
          Delete profile
        </button>
      </div>
    );
  }
}

export default withAuth(User);
