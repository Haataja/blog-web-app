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
    fetch(this.BASE_URL + this.props.id).then(this.props.update).catch((e) => console.log(e));
  }

  render(){
    if (this.props.auht){
      return <li> <span onClick={this.clicked}>{this.props.name}</span> <button onClick={this.deletePost}>delete</button></li>
    } else {
      return <li onClick={this.clicked}>{this.props.name}</li>
    }
  }
}

export default ListItem;