import React, { Component } from 'react';
import banner from './img/logo.png';
import './App.css';
import BlogAndSide from "./components/BlogAndSide";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={banner} className="banner" alt="logo" />
          <div className="navbar"></div>
          <BlogAndSide/>
        </header>
      </div>
    );
  }
}

export default App;
