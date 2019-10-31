import React, { Component } from 'react';
import './Pedidos.css';
import { Back } from './components/Back';
import { Search } from './components/Search';
import { BottomBarPerfil } from './components/bottomBarPerfil/BottomBarPerfil';
import { PedidoFeatured } from './pedidoFeatured/PedidoFeatured';
import { Link } from 'react-router-dom';
import { BottomApp } from '../bottomApp/BottomApp';
import { HomeHeader } from '../homeHeader/HomeHeader';

function PedidosFeatured() {
    const pedidos = [
      {
        pedido_id: '1970433',
        date: "12/05/2019",
        tracking_code: "IW294295I23",
        quantity: "2",
        total: "R$112,21",
        status: "Entregue"
      },
      {
        pedido_id: '23124242',
        date: "12/05/2019",
        tracking_code: "IW294195I23",
        quantity: "1",
        total: "R$112,21",
        status: "Entregue"
      },
      {
        pedido_id: '12412412',
        date: "12/05/2019",
        tracking_code: "BC294295I23",
        quantity: "1",
        total: "R$112,21",
        status: "Entregue"
      }
    ]

return <div className="conteiner">
<HomeHeader />
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
<div className="PedidoFeatured"> 
        { pedidos.map (
          pedido => <Link to={`/Pedido?id=${pedido.pedido_id}`}> 
            <Pedido
            date={pedido.date}
            tracking_code={pedido.tracking_code} 
            quantity={pedido.quantity}
            total={pedido.total}
            status={pedido.status}  
            /> </Link>
          )}
      </div>
  <BottomApp />
</div>
}

export default {PedidoFeatured};
