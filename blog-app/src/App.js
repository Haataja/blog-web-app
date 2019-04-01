import React, {Component} from 'react';
//import './App.css';
import BlogAndSide from "./components/BlogAndSide";
import { BrowserRouter as Router, Route} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <header className="App-header">
          </header>
          <Route exact path="/" component={this.Home} />
          <Route path="/admin" component={this.About} />
        </div>
      </Router>
    );
  }


  Home() {
    return <BlogAndSide auth={false}/>;
  }

  About() {
    return <BlogAndSide auth={true}/>;
  }
}

export default App;
