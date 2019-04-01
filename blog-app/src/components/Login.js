import React, { Component } from 'react';
import { Link } from "react-router-dom";


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
      return < Link to="/logout" onClick={this.clicked}>Logout</Link>;
    } else {
      return <Link to="/login"  onClick={this.clicked}>Login</Link>;
    }

  }
}

export default Login;