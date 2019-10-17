import React from 'react';
import homeFeatured from './HomeFeatured.svg'
import './HomeFeatured.css';
import { ItemFeatured } from '../itemFeatured/ItemFeatured';

const HomeFeatured = () => {
    const items = [
      {
        name: "Item 1",
        author: "Author 1",
        price: "R$40"
      },
      {
        name: "Item 2",
        author: "Author 2",
        price: "R$40"
      },
      {
        name: "Item 3",
        author: "Author 3",
        price: "R$40"
      }
    ]
    return (
      <div className="HomeFeatured">
        <div className="Title"> Destaques </div>
        <div className="Subtitle"> Confira o que está saindo mais! </div>
        <div className="SeeAll"> Ver todos </div> 
        <div className="Items"> 
          {items.map (
            item => <ItemFeatured 
              name={item.name} 
              author={item.author}
              price={item.price} 
            />
          )}
        </div>
      </div>
    )
  }
  export {HomeFeatured}
