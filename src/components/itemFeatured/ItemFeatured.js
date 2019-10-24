import React from 'react';
import itemFeatured from './ItemFeatured.svg'
import './ItemFeatured.css'
import { AddFavorite } from '../addFavorite/AddFavorite';
import { Rating } from '../rating/Rating';
const ItemFeatured = ({photo, name, author, price}) => (
    <div className="ItemFeatured">
      <div className="Photo"><img src = { photo } width='100px' height='140px'/></div>
      <Rating />
      <div className="Author">{ author }</div>
      <div className="Name">{ name }</div>
      <div className="Price">{ price }</div>
      <AddFavorite />
    </div>
  )
export {ItemFeatured}