import React, { Component } from 'react';
import './Perfil.css';
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

function Perfil() {

  var user = [];

  var config = {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
    }
  };

  axios.get('http://localhost:5000/user/1', config)
  .then(function(response){
    if (response.status == 200) {
      user = response.data;
    }
  });  


  return <div className="conteiner">
      <PedidoHeader />
      <div className="MeuPerfil">Meu Perfil</div>
      <div className="Nome">Guilherme Prado</div>
      <div className="Email">E-mail: prado.guilherme@gmail.com</div>
      <div className="Favoritos">Seja um vendedor</div>
      <div className="FavoritosBio">Habilite sua loja</div>
      <div className="Favoritos">Meus Pedidos</div>
      <div className="FavoritosBio">Habilite sua loja</div>
      <div className="Favoritos">Favoritos</div>
      <div className="FavoritosBio">Veja os produtos favoritados</div>
      <div className="Pagamento">Métodos de pagamento</div>
      <div className="PagamentoBio">Veja os meio de pagamento cadastrados</div>
      <div className="Cupom">Cupons de desconto</div>
      <div className="CupomBio">Insira um cupom de desconto</div>
      <div className="Avaliações">Minhas avaliações</div>
      <div className="AvaliaçõesBio">Veja os produtos que você avaliou</div>
      <div className="Configurações">Configurações</div>
      <div className="ConfiguraçõesBio">Altere dados cadastrais</div>
      <div className="Bottom"><BottomApp/></div>

</div>
}


export default Perfil;