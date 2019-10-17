import React from 'react';
import itemFeatured from './ItemFeatured.svg'
import './ItemFeatured.css'
import { AddFavorite } from '../addFavorite/AddFavorite';
import { Rating } from '../rating/Rating';
const ItemFeatured = ({name, author, price}) => (
    <div className="ItemFeatured">
      <div className="Author">{ author }</div>
      <div className="Name">{ name }</div>
      <div className="Price">{ price }</div>
      <Rating />
      <AddFavorite />
    </div>
  )
export {ItemFeatured}