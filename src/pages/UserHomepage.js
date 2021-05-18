import React, { Component } from 'react'
//import { withAuth } from '../context/auth.context';
import User from '../components/User';
import { Link } from 'react-router-dom';

function UserHomepage() {
    return (
      <div>
        <p>
          <User />
        </p>
        {/* <Link to={`/editUser/${id}`}>Edit</Link> */}
      </div>
    );
}

export default UserHomepage;
