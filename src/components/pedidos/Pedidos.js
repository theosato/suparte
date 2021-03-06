import React, { Component } from 'react';
import './Pedidos.css';
import { Back } from './components/Back';
import { Search } from './components/Search';
import { BottomBarPerfil } from './components/bottomBarPerfil/BottomBarPerfil';
import { Pedido } from './components/pedido/Pedido';
import { BottomApp } from '../bottomApp/BottomApp';
import { HomeHeader } from '../homeHeader/HomeHeader';
import { PedidoHeader } from '../pedidoHeader/PedidoHeader';
import { ItemPedido } from '../itemPedido/ItemPedido';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Pedidos() {

  var pedido = [];

  var config = {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
    }
  };

  axios.get('http://localhost:5000/item', config)
  .then(function(response){
    if (response.status == 200) {
      pedido = response.data;
    }
  });  

  const pedidos = [
    {
      id: '1970433',
      date: "12/05/2019",
      tracking_code: "IW294295I23",
      quantity: "2",
      total: "R$22,21",
      status: "Entregue"
    },
    {
      id: '23124242',
      date: "12/05/2019",
      tracking_code: "IW294195I23",
      quantity: "1",
      total: "R$99,21",
      status: "Entregue"
    },
    {
      id: '12412412',
      date: "12/05/2019",
      tracking_code: "BC294295I23",
      quantity: "1",
      total: "R$112,21",
      status: "Entregue"
    }
  ]

  return (
    <div className="conteiner">
      <PedidoHeader />
      <div className="MeusPedidos">Meus Pedidos</div>
      <table className="Options">
        <tr>
          <td className="Option">
            <div className="Entregues">Entregues</div>
          </td>
          <td className="Option">
            <div className="Processando">Processando</div>
          </td>
          <td className="Option">
          <div className="Cancelados">Cancelados</div>
          </td>
        </tr>
      </table>

      <div className="Pedidos"> 
          { pedidos.map (
            item => 
             <ItemPedido 
              id={item.id}
              date={item.date}
              tracking_code={item.tracking_code} 
              quantity={item.quantity}
              total={item.total}
              status={item.status} 
            /> 
          )}
        </div>
        <BottomApp />
      </div>
  )
}

export default Pedidos;