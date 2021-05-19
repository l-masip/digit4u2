import React, { Component } from "react";
import UserService from "../services/user.service";
import SampleProduct from "./SampleProduct";
import { withAuth } from "../context/auth.context";
import { Link } from "react-router-dom";

class User extends React.Component {
  userService = new UserService();

  deleteUser = () => {
    this.userService
      .deleteUser(this.props.id)
      .then(() => {
        console.log("Deleted");
        this.props.refreshState();
<<<<<<< HEAD

=======
        this.props.history.push('/');
>>>>>>> 3a4bf37d0787299dde8c884ea833476a04bdcc6a
      })
      .catch((err) => console.error(err));
  };


  componentDidMount() {
  }

  displayProducts = () => {
    if(this.props.products) {
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
  }

    render(){
      console.log("products in user.js", this.props.products);
      return (
        <div className="user">
          <div>
            <h2>
              {this.props.name} {this.props.surname}
            </h2>
            <p>Position: {this.props.position}</p>
            <p>Phone: {this.props.phone}</p>
          </div>
          <div>
            {this.props.products && this.displayProducts()}
          </div>
          <Link to={`/editUser/${this.props.id}`}>Edit</Link>
          <button onClick={() => this.deleteUser()}>Delete</button>
        </div>
      );

    }
}

export default withAuth(User);
