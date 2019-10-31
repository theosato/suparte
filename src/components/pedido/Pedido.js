import React, { Component } from 'react';
import './Pedidos.css';
import { Back } from './components/Back';
import { Search } from './components/Search';
import { BottomBarPerfil } from './components/bottomBarPerfil/BottomBarPerfil';
import { Pedido } from './components/pedido/Pedido';
import { Link } from 'react-router-dom';
import { BottomApp } from '../bottomApp/BottomApp';
import { HomeHeader } from '../homeHeader/HomeHeader';

const PedidoFeatured = ({id, date, tracking_code, quantity, total, status}) => (
  <div className="PedidoFeatured">
    <div className="Date">{ date }</div>
    <div className="TrackingCode">{ tracking_code }</div>
    <div className="Quantity">{ quantity }</div>
    <div className="Total">{ total }</div>
    <div className="Status">{ status }</div>
  </div>
)

export {Pedido};
