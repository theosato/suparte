import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import {HomeHeader} from './components/homeHeader/HomeHeader';
import { SlideShow } from './components/slideShow/SlideShow';
import { HomeFeatured } from './components/homeFeatured/HomeFeatured';
import { BottomApp } from './components/bottomApp/BottomApp';


class App extends Component {
  render() {
    return (
      <div className="App">
        <HomeHeader />
        <SlideShow  />
        <HomeFeatured />
        <BottomApp />
      </div>
    );
  }
}

export default App;
