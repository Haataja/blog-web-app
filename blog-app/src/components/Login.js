import React, { Component } from 'react';


class Login  extends Component{

  constructor(props){
    super(props);
    this.state = {};
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
      return <a href="/logout" onClick={this.clicked}>Logout</a>;
    } else {
      return <a href="/login"  onClick={this.clicked}>Login</a>;
    }

  }
}

export default Login;