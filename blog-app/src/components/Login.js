import React, { Component } from 'react';


class Login  extends Component{
  BASE_URL ='http://localhost:8080/';

  constructor(props){
    super(props);
    this.state = {};
    this.listId = props.listId;
    this.clicked = this.clicked.bind(this);
    this.typing = this.typing.bind(this);
  }

  clicked(event){
    console.log("Data sent")
    this.postData(this.BASE_URL +'login',{'username': this.state.username, 'password':this.state.password})
  }

  typing(event){
    this.setState({[event.target.name]: event.target.value});
  }

  postData(url = '', data = {}) {
    // Default options are marked with *
    return fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'no-cors', // no-cors, cors, *same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
        // "Content-Type": "application/x-www-form-urlencoded",
      },
      redirect: 'follow', // manual, *follow, error
      referrer: 'no-referrer', // no-referrer, *client
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    })
      .then(response => response.json()); // parses response to JSON
  }

  render(){
    return <div><form>
      <div><label> User Name : <input onInput={this.typing} type="text" name="username"/> </label></div>
    <div><label> Password: <input onInput={this.typing} type="password" name="password"/> </label></div>
    </form>
      <div><button onClick={this.clicked}>"Sign In"</button></div> </div>

  }
}

export default Login;