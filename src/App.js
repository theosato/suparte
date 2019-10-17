import React, { Component } from 'react';
import logo from './logo.svg';
import {HomeHeader} from './components/homeHeader/HomeHeader';
import './App.css';
import { SlideShow } from './components/slideShow/SlideShow';
import { HomeFeatured } from './components/homeFeatured/HomeFeatured';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HomeHeader />
        <SlideShow  />
        <HomeFeatured />
      </div>
    );
  }
}

export default App;
