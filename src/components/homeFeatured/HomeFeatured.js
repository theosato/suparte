import React from 'react';
import homeFeatured from './HomeFeatured.svg'
import './HomeFeatured.css';
import { ItemFeatured } from '../itemFeatured/ItemFeatured';
import { Link } from 'react-router-dom';
import { ProdutosMock } from '../../MockBD';
import axios from 'axios';

const HomeFeatured = () => {

    var itens = [];

    var config = {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
      }
    };

    axios.get('http://localhost:5000/item', config)
      .then(function(response){
        if (response.status == 200) {
          itens = response.data;
        }
      });  

    const items = [
      {
          prod_id: '1',
          photo: 'https://www.thephotoargus.com/wp-content/uploads/2018/09/8uniquegift.jpg',
          name: "Item 1",
          author: "Author 1",
          price: "R$40",
          description: "That's to my cigarettes."
      },
      {
          prod_id: '2',
          photo: 'https://render.fineartamerica.com/images/rendered/search/print/images/artworkimages/medium/1/michael-stipe-richard-day.jpg',
          name: "Item 2",
          author: "Author 2",
          price: "R$20",
          description: "Please, buy it. I'm poor."
      },
      {
          prod_id: '3',
          photo: "https://i.pinimg.com/originals/6d/e3/da/6de3da7230d1797a11fc95ae26b31b80.jpg",
          name: "Item 3",
          author: "Author 3",
          price: "R$30",
          description: "That's a nice product."
      }
]

    return (
      <div className="HomeFeatured">
        <div className="Title"> Destaques </div>
        <div className="Subtitle"> Confira o que está saindo mais! </div>
        <div className="SeeAll"> <Link to="/"> Ver todos </Link></div> 
        <div className="Items"> 
          { items.map (
            item => <Link to={`/Product?id=${item.prod_id}`}> 
             <ItemFeatured 
              photo={item.photo}
              name={item.name} 
              author={item.author}
              price={item.price} 
            /> </Link>
          )}
        </div>
      </div>
    )
  }
  export {HomeFeatured}
