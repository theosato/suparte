import React, { Component } from 'react';
import './Product.css';
import { BottomApp } from '../bottomApp/BottomApp';
import { ProductHeader } from '../productHeader/ProductHeader';
import queryString from 'query-string';

const Product = ({id, photo, price, name, description, author, location}) => {

  if(window){
    const values = queryString.parse(location.search)
    console.log(123,values)
  }

  return (
    <div className="Product">
      {console.log("entrou")}
      <ProductHeader />
      <div className="Id">{ id }</div>
      <div className="Photo"><img src = { photo } width='100px' height='140px'/></div>
      <div className="Author">{ author }</div>
      <div className="Name">{ name }</div>
      <div className="Description">{ description }</div>
      <div className="Price">{ price }</div>
      <BottomApp />
    </div>)
}

export default Product;
