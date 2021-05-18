import React from 'react';
import {Route, Switch} from 'react-router';
import AnonRoute from './components/AnonRoutes/AnonRoute';
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import Products from './pages/Products';
import Footer from './components/Footer';
import Blog from './pages/Blog';
import SingUp from './pages/SignUp';
import Login from "./pages/Login";
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import UserHomepage from './pages/UserHomepage';
// import { withAuth } from "./context/auth.context";


function App() {

  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/articles" component={Blog} />
        <AnonRoute exact path="/signup" component={SingUp} />
        <AnonRoute exact path="/login" component={Login} />
        <PrivateRoute path="/profile" exact component={UserHomepage} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
