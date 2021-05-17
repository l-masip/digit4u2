import React from 'react';
import {Route, Switch} from 'react-router';
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import Products from './pages/Products';
import Footer from './components/Footer';
// import { withAuth } from "./context/auth.context";


function App() {

  return (
    <div>
      <Navbar />
      <Switch>
        <Route exct path="/" component={Homepage} />
        <Route exct path="/products" component={Products} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
