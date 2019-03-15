import React, { Component } from 'react';
import ListItem from "./ListItem";
import './BlogAndSide.css';

class BlogAndSide extends Component{
  BASE_URL ='http://localhost:8080/posts';

  constructor(props){
    super(props);
    this.state = {'blogs':'','current':-1};
    this.updateList = this.updateList.bind(this);
    this.change = this.change.bind(this);
  }

  componentDidMount(){
    this.updateList();
  }

  updateList(){
    fetch(this.BASE_URL).then(http => http.json()).then(json => {
      console.log(json);
      let state = {'blogs': json, 'titles': json.map((i, index)=> <ListItem key={i.id} name={i.title} listId={index} click={this.change}/>), 'current':0};
      //console.log('here '  + state.blogs[0].id);
      this.setState(state);
    });
  }

  change(listId){
    //console.log(listId);
    let state = {'current': listId};
    this.setState(state);
  }

  render(){
    console.log(this.state.titles);
    if(this.state.current !== -1){
      return <div>
        <ul className="Blog-names">{this.state.titles}</ul>
        <div>
          <h1>{this.state.blogs[this.state.current].title}</h1>
          <p>{this.state.blogs[this.state.current].post.split('\n').map((item, key) => (<span key={key}>{item}<br/></span>))}</p>
        </div>
      </div>;
    } else{
      return <h1>Loading</h1>;
    }

  }
}

export default BlogAndSide;