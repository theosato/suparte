import React, { Component } from 'react';
import './Pedidos.css';
import { Back } from './components/Back';
import { Search } from './components/Search';
import { BottomBarPerfil } from './components/bottomBarPerfil/BottomBarPerfil';
import { Pedido } from './components/pedido/Pedido';
import { BottomApp } from '../bottomApp/BottomApp';
import { HomeHeader } from '../homeHeader/HomeHeader';

function Pedidos() {
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

  <div className="Ped1"><Pedido/></div>
  <div className="Ped2"><Pedido/></div>  
  <div className="Ped3"><Pedido/></div>  
  <BottomApp />
</div>
}

export default Pedidos;
