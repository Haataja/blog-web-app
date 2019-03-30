import React, { Component } from 'react';

class Search extends Component{
  constructor(props){
    super(props);
    this.typing = this.typing.bind(this);
  }

  typing(event){
    this.setState({[event.target.name]: event.target.value});
  }

  render(){
    return <input onInput={this.typing} type="text" name="search"/>
  }
}
export default Search;