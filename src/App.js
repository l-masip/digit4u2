import React from 'react';
import {Route, Switch} from 'react-router';
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import Products from './pages/Products';
import Footer from './components/Footer';
import Blog from './pages/Blog';
// import { withAuth } from "./context/auth.context";


function App() {

  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/products" component={Products} />
        <Route exact path='/articles' component={Blog} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
