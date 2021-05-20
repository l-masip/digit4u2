import React from "react";
import { Route, Switch } from "react-router";
import AnonRoute from "./components/AnonRoutes/AnonRoute";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import Products from "./pages/Products";
import Footer from "./components/Footer";
import Blog from "./pages/Blog";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import UserHomepage from "./pages/UserHomepage";
import EditArticle from "./pages/EditArticle";
import EditUser from "./pages/EditUser";
import ContactUs from "./pages/ContactUs";
import { withAuth } from "./context/auth.context";
// import './App.css'

function App() {
  return (
    <div className='wrapper'>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/articles" component={Blog} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/editArticle/:id" component={EditArticle} />
        <Route exact path="/editUser/:id" component={EditUser} />
        <Route exact path="/contact-us" component={ContactUs} />
        <PrivateRoute path="/userhomepage" exact component={UserHomepage} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
