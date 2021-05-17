import React from 'react';
import {Route, Switch} from 'react-router';
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import Products from './pages/Products';
import Footer from './components/Footer';


function App() {

  return (
    <div>
      <Navbar {...{ loggedIn }} />
      <Switch>
        <Route exct path="/" component={Homepage} />
        <Route exct path="/products" component={Products} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
