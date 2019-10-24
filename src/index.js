import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Success from '../src/components/success/Success';
// import Profile from './Profile';           <Route path="/profile" component={Profile} /> COLOCAR NO ROUTER
// import Cart from './Cart';                 <Route path="/cart" component={Cart} /> COLOCAR NO ROUTER
 import Product from '../src/components/product/Product';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './index.css';

ReactDOM.render(
  <Router>
      <Switch>
          <Route path="/" exact={true} component={App} />
          <Route path="/success" component={Success} />
          <Route exact path="/product" component={Product} />
      </Switch>
  </Router>, 
  document.getElementById('root'));
