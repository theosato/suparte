import React from 'react';
import './ProductHeader.css';
import CustomizedInputBase from '../searchBar/SearchBar';
import logo from '../logo/logo.png';
const ProductHeader = () => (
    <div className="ProductHeader">
      <table className="Table"> 
          <tr> 
            <td> <img src="https://cdn1.iconfinder.com/data/icons/general-ui-outlined-thick/24/chevron-left-512.png" className="Logo"/> </td>
            <td className="ProductName">Produto</td>
          </tr>
      </table>
    </div>
    )
export {ProductHeader}