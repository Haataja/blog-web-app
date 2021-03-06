import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "./Login.css";
import Button from "react-bootstrap/Button";

class Like  extends Component{
  BASE_URL = 'http://localhost:8080';

  constructor(props){
    super(props);
    this.clicked = this.clicked.bind(this);
    this.blogId = props.blogId;
    this.state = {likes: props.likes};
  }

  clicked(event){
    fetch(this.BASE_URL + '/posts/like/' + this.blogId).then(http => http.json()).then(this.props.update);
  }


  render(){
    this.blogId = this.props.blogId;
    this.state.likes = this.props.likes;
    return <div>
      <h3>This post has {this.state.likes}, like this post: <Button onClick={this.clicked} size="sm" title="like"  variant="info">
        <span className="fa fa-heart" aria-hidden="true"/> </Button> </h3>
    </div>
  }
}

export default Like;