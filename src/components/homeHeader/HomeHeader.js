import React from 'react';
import homeHeader from './HomeHeader.svg'
import './HomeHeader.css';
import CustomizedInputBase from '../searchBar/SearchBar';
import logo from '../logo/logo.png';
const HomeHeader = () => (
    <div className="HomeHeader">
      <table className="Table"> 
          <tr> 
            <td> <img src= { logo } className="Logo"/> </td>
            <td> <CustomizedInputBase /> </td>
          </tr>
      </table>
    </div>
  )
export {HomeHeader}