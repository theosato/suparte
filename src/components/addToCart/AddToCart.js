import React from 'react';
import './AddToCart.css';
import { Link } from 'react-router-dom';
import addToCart from './AddToCart.svg'
const AddToCart = () => (
    <div className="Add">
      <table className="Table"> 
          <tr> 
            <Link to="/success">
              <img src={addToCart} />
            </Link>
          </tr>
      </table>
    </div>
    )
export {AddToCart}