import React, { Component } from 'react';


class CommentForm  extends Component{
  BASE_URL ='http://localhost:8080/';

  constructor(props){
    super(props);
    this.state = {};
    this.blogId = props.blogId;
    this.clicked = this.clicked.bind(this);
    this.typing = this.typing.bind(this);
  }

  clicked(event){
    console.log("Data sent to " + this.blogId);
    this.postData(this.BASE_URL +'comment/' + this.blogId,{'commentTitle': this.state.commentTitle,
      'commentField':this.state.commentField, 'nickname':this.state.nickname});
  }

  typing(event){
    this.setState({[event.target.name]: event.target.value});
  }

  postData(url = '', data = {}) {
    // Default options are marked with *
    return fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, cors, *same-origin
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
      <div><label> Title : <input onInput={this.typing} type="text" name="commentTitle"/> </label></div>
    <div><label> Comment : <input onInput={this.typing} type="text" name="commentField"/> </label></div>
      <div><label>Nickname : <input onInput={this.typing} type="text" name="nickname"/> </label></div>
    </form>
      <div><button onClick={this.clicked}>Send</button></div> </div>

  }
}

export default CommentForm;