import React, { Component } from 'react';


class BlogPostForm extends Component{
  BASE_URL ='http://localhost:8080/';

  constructor(props){
    super(props);
    this.state = {};
    this.blogId = props.blogId;
    this.clickedFunction = props.buttonClicked;
    this.clicked = this.clicked.bind(this);
    this.typing = this.typing.bind(this);
  }

  clicked(event){
    console.log("Data sent to back");
    this.postData(this.BASE_URL +'posts/add',{'title': this.state.title,
      'post':this.state.post, 'author':this.state.author}).then(this.props.update)
      .then(this.setState({title:'',post:'',author:''}));
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
    return <div><form>
      <div><label> Title : <input onInput={this.typing} type="text" name="title" value={this.state.title}/> </label></div>
    <div><label> post : <input onInput={this.typing} type="text" name="post" value={this.state.post}/> </label></div>
      <div><label>author : <input onInput={this.typing} type="text" name="author" value={this.state.author}/> </label></div>
    </form>
      <div><button onClick={this.clicked}>Send</button></div> </div>

  }
}

export default BlogPostForm;