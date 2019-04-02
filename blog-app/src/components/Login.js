import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "./Login.css";

class Login  extends Component{

  constructor(props){
    super(props);
    this.state = {auth: false};
    this.auth = props.auth;
    this.clicked = this.clicked.bind(this);
  }

  clicked(event){
    console.log('login pushed');
    this.props.clickedFunction();
    this.auht = !this.auth;
  }


  render(){
    this.auth = this.props.auth;
    if(this.auth){
      return <div className="login-button"><button>
        <Link style={{display: 'block', height: '100%'}} to="/logout" onClick={this.clicked}>Logout</Link>
      </button></div>;
    } else {
      return <div className="login-button"><button>
        <Link to="/login"  onClick={this.clicked}>Login</Link>
      </button></div>;
    }

  }
}

export default Login;