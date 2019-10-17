import React, { Component } from 'react';
import logo from './logo.svg';
import {HomeHeader} from './componentes/homeHeader/HomeHeader';
import './App.css';
import { SlideShow } from './componentes/slideShow/SlideShow';
import { HomeFeatured } from './componentes/homeFeatured/HomeFeatured';

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
