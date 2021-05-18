import React, { Component } from 'react'
//import { withAuth } from '../context/auth.context';
import User from '../components/User';
import EditUser from '../pages/EditUser';

function UserHomepage() {
    return (
      <div>
        <h1>
          Welcome <User />
        </h1>
        <p>
        <EditUser />
        </p>
      </div>
    );
}

export default UserHomepage;
