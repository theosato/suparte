import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Success from '../src/components/success/Success';
import Product from '../src/components/product/Product';
import Pedidos from '../src/components/pedidos/Pedidos';
import Perfil from '../src/components/perfil/Perfil';

// import Profile from './Profile';           <Route path="/profile" component={Profile} /> COLOCAR NO ROUTER
// import Cart from './Cart';                 <Route path="/cart" component={Cart} /> COLOCAR NO ROUTER
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
          <Route exact path="/orders" component={Pedidos} />
          <Route exact path="/profile" component={Perfil} />
      </Switch>
  </Router>, 
  document.getElementById('root'));
