import React from 'react';
import ReactDOM from 'react-dom';
import Pedidos from './Pedidos';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Pedidos />, div);
  ReactDOM.unmountComponentAtNode(div);
});
