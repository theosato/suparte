import React from 'react';
import itemPedido from './ItemPedido.svg'
import './ItemPedido.css'

const ItemPedido = ({id, date, tracking_code, quantity, total, status}) => (
    <div className="ItemPedido">
      <div className="ID">Pedido Nº { id }</div>
      <div className="Date">{ date }</div>
      <div className="Tracking Code">Código de Rastreio: { tracking_code }</div>
      <div className="Quantity">Quantidade: { quantity }</div>
      <div className="Total">Total: { total }</div>
      <div className="Status">Status do pedido: { status }</div>
    </div>
  )
export {ItemPedido}