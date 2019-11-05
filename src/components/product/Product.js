import React, { Component } from 'react';
import './Product.css';
import { BottomApp } from '../bottomApp/BottomApp';
import { ProductHeader } from '../productHeader/ProductHeader';
import queryString from 'query-string';
import { Rating } from '../rating/Rating';

<<<<<<< Updated upstream
const Product = ({id, photo, price, name, description, author, location}) => {
=======
const Product = () => {
    var produto = {}

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
>>>>>>> Stashed changes

  if(window){
    const values = queryString.parse(location.search)
    console.log(123,values)
  }

  return (
    <div className="Product">
      {console.log("entrou")}
      <ProductHeader />
<<<<<<< Updated upstream
      <div className="Id">{ id }</div>
      <div className="Photo"><img src = { photo } width='100px' height='140px'/></div>
      <div className="Author">{ author }</div>
      <div className="Name">{ name }</div>
      <div className="Description">{ description }</div>
      <div className="Price">{ price }</div>
=======
      <div className="Id">{ produto.id }</div>
      <div className="Photo"><img src = { produto.photo } width='375px' height='375px'/></div>
      <div className="ProductSpace">
        <table className="Table1">
          <tr>
            <td className="Option">
              <div className="Name">{ produto.name }</div>
            </td>
            <td className="Option">
              <div className="Price">{ produto.price }</div>
            </td>
          </tr>
        </table>
        <table className="Table2">
          <tr>
            <td className="Option">
            <div className="Author">{ produto.author }</div>
            </td>
          </tr>
          <tr>
            <td className="Option">
              <Rating />
            </td>
          </tr>
          <tr>
            <td className="Option">
            <div className="Description">{ produto.description }</div>
            </td>
          </tr>
        </table>
      </div>
>>>>>>> Stashed changes
      <BottomApp />
    </div>)
}

export default Product;
