import React, { Component } from 'react';


class ListItem  extends Component{
  constructor(props){
    super(props);
    this.listId = props.listId;
    this.clicked = this.clicked.bind(this);
  }

  clicked(event){
    this.props.click(this.listId);
  }

  render(){
    return <li onClick={this.clicked}>{this.props.name}</li>
  }
}

export default ListItem;