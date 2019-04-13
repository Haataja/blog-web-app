import React, { Component } from 'react';

class Search extends Component{
  constructor(props){
    super(props);
    this.typing = this.typing.bind(this);
  }

  typing(event){
    this.setState({[event.target.name]: event.target.value});
    this.props.callBack(event.target.value);
  }

  render(){
    return <input className="form-control" onInput={this.typing} type="text" name="search"  aria-label="Small"
                  aria-describedby="inputGroup-sizing-sm" placeholder="Search"/>
  }
}
export default Search;