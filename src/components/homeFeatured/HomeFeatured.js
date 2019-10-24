import React from 'react';
import homeFeatured from './HomeFeatured.svg'
import './HomeFeatured.css';
import { ItemFeatured } from '../itemFeatured/ItemFeatured';

const HomeFeatured = () => {
    const items = [
      {
        photo: 'https://www.thephotoargus.com/wp-content/uploads/2018/09/8uniquegift.jpg',
        name: "Item 1",
        author: "Author 1",
        price: "R$40"
      },
      {
        photo: 'https://render.fineartamerica.com/images/rendered/search/print/images/artworkimages/medium/1/michael-stipe-richard-day.jpg',
        name: "Item 2",
        author: "Author 2",
        price: "R$20"
      },
      {
        photo: "https://i.pinimg.com/originals/6d/e3/da/6de3da7230d1797a11fc95ae26b31b80.jpg",
        name: "Item 3",
        author: "Author 3",
        price: "R$30"
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
              photo={item.photo}
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
