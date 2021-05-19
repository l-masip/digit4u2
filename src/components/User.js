import React, { Component } from 'react';
import UserService from '../services/user.service';
import {withAuth} from "../context/auth.context";
import { Link } from 'react-router-dom';


function User ({name, surname, position, phone, products, id, refreshState}) {
  const userService = new UserService();


  const deleteUser=()=> {
    userService.deleteUser(id)
      .then(() => {
        console.log('Deleted');
        refreshState();
        window.location.reload();
      })
      .catch(err => console.error(err))
  }


    //const {user}= this.props;

    return (
      <div className="user">
        <div>
          <h2>
            {name} {surname}
          </h2>
          <p>Position: {position}</p>
          <p>Phone: {phone}</p>
        </div>
        <div>
          <p>Your products: {products}</p>
          <Link to={`/editUser/${id}`}>Edit</Link>
          <button onClick={() => deleteUser()}>Delete</button>
        </div>
      </div>
    );

}

export default withAuth(User);
