import React from 'react';
import './ProductHeader.css';
import CustomizedInputBase from '../searchBar/SearchBar';
import logo from '../logo/logo.png';
import { Link } from '@material-ui/core';
const ProductHeader = () => (
    <div className="ProductHeader">
      <table className="Table"> 
          <tr> 
            <Link to="/">
              <td className="Chevron"><img src="https://cdn1.iconfinder.com/data/icons/general-ui-outlined-thick/24/chevron-left-512.png" className="Logo"/></td>
            </Link>
            <td className="ProductName">Produto</td>
          </tr>
      </table>
    </div>
    )
export {ProductHeader}