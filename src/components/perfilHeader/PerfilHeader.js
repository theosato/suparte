import React from 'react';
import './PerfilHeader.css';
import CustomizedInputBase from '../searchBar/SearchBar';
import logo from '../logo/logo.png';
import { Link } from '@material-ui/core';
const PerfilHeader = () => (
    <div className="PerfilHeader">
      <table className="Table"> 
          <tr> 
            <Link to="/">
              <td><img src="https://cdn1.iconfinder.com/data/icons/general-ui-outlined-thick/24/chevron-left-512.png" className="Logo"/></td>
            </Link>
            <td> <CustomizedInputBase /> </td>
          </tr>
      </table>
    </div>
    )
export {PerfilHeader}