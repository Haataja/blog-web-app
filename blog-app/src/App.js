import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BlogAndSide from "./components/BlogAndSide";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <BlogAndSide/>
        </header>
      </div>
    );
  }
}

export default App;