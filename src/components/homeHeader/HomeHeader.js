import React from 'react';
import homeHeader from './HomeHeader.svg'
import './HomeHeader.css';
import { SearchBar } from '../searchBar/SearchBar';
const HomeHeader = () => (
    <div className="HomeHeader">
      <div className="PosBar">
        <SearchBar/> 
      </div>
    </div>
  )
export {HomeHeader}