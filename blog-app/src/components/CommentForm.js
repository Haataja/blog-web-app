import React, { Component } from 'react';
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";


class CommentForm  extends Component{
  BASE_URL ='https://lone-wanderer-blog-app.herokuapp.com/';

  constructor(props){
    super(props);
    this.state = {};
    this.blogId = props.blogId;
    this.clickedFunction = props.buttonClicked;
    this.clicked = this.clicked.bind(this);
    this.typing = this.typing.bind(this);
  }

  clicked(event){
    console.log("Data sent to " + this.blogId);
    this.postData(this.BASE_URL +'comment/' + this.blogId,{'commentTitle': this.state.commentTitle,
      'commentField':this.state.commentField, 'nickname':this.state.nickname}).then(this.clickedFunction)
      .then(this.setState({commentField:'',commentTitle:'',nickname:''}));
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
    this.blogId = this.props.blogId;
    return <Container>
      <Form>
        <Form.Group controlId="Title">
          <Form.Label> Title :  </Form.Label> <Form.Control onInput={this.typing} type="text" name="commentTitle" value={this.state.commentTitle}/>
        </Form.Group>
        <Form.Group controlId="Comment">
          <Form.Label> Comment : </Form.Label><Form.Control onInput={this.typing} as="textarea" rows="5" name="commentField" value={this.state.commentField}/>
        </Form.Group>
        <Form.Group controlId="Nickname">
          <Form.Label>Nickname : </Form.Label> <Form.Control onInput={this.typing} type="text" name="nickname" value={this.state.nickname}/>
        </Form.Group>
      </Form>
      <Button onClick={this.clicked}>Send</Button> </Container>

  }
}

export default CommentForm;