import React, { Component } from 'react';


class ListItem  extends Component{
  BASE_URL = 'http://localhost:8080/posts/delete/';
  constructor(props){
    super(props);
    this.listId = props.listId;
    this.clicked = this.clicked.bind(this);
    this.deletePost = this.deletePost.bind(this);
  }

  clicked(event){
    this.props.click(this.listId);
  }

  deletePost(){
    fetch(this.BASE_URL + this.props.id).then(http => http.json()).then(json => {
      console.log(json);
    })
  }

  render(){
    if (this.props.auht){
      return <li onClick={this.clicked}>{this.props.name} <button onClick={this.deletePost}>delete</button></li>
    } else {
      return <li onClick={this.clicked}>{this.props.name}</li>
    }
  }
}

export default ListItem;