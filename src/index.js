import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import Profile from './Profile';           <Route path="/profile" component={Profile} /> COLOCAR NO ROUTER
// import Cart from './Cart';                 <Route path="/cart" component={Cart} /> COLOCAR NO ROUTER
// import Product from './Product';           <Route path="/product" component={Product} /> COLOCAR NO ROUTER
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

ReactDOM.render(
  <BrowserRouter>
      <Switch>
          <Route path="/" exact={true} component={App} />
      </Switch>
  </BrowserRouter>, 
  document.getElementById('root'));
registerServiceWorker();
