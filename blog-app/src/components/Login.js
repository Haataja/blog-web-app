import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "./Login.css";
import Button from "react-bootstrap/Button";

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
      return <div className="login-button"><Button>
        <Link to="/logout" onClick={this.clicked}>Logout</Link>
      </Button></div>;
    } else {
      return <div className="login-button"><Button>
        <Link to="/login"  onClick={this.clicked}>Login</Link>
      </Button></div>;
    }

  }
}

export default Login;