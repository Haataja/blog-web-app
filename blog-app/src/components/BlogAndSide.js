import React, {Component} from 'react';
import ListItem from "./ListItem";
import CommentForm from "./CommentForm";
//import './BlogAndSide.css';

class BlogAndSide extends Component {
  BASE_URL = 'http://localhost:8080/posts';

  constructor(props) {
    super(props);
    this.state = {'blogs': '', 'current': -1};
    this.updateList = this.updateList.bind(this);
    this.change = this.change.bind(this);
  }

  componentDidMount() {
    this.updateList();
  }

  updateList() {
    fetch(this.BASE_URL).then(http => http.json()).then(json => {
      console.log(json);
      let state = {
        'blogs': json,
        'titles': json.map((i, index) => <ListItem key={i.id} name={i.title} listId={index} click={this.change}/>),
        'current': 0
      };
      //console.log('here '  + state.blogs[0].id);
      this.setState(state);
    });
  }

  change(listId) {
    //console.log(listId);
    let state = {'current': listId};
    this.setState(state);
  }

  render() {
    console.log(this.state.titles);
    if (this.state.current !== -1) {
      return <div className="page">
        <div className="title-and-text">
          <h1>{this.state.blogs[this.state.current].title}</h1>
          <h3>{this.state.blogs[this.state.current].author}</h3>
          <p>{this.state.blogs[this.state.current].post.split('\n').map((item, key) => (
            <span key={key}>{item}<br/></span>))}</p>
        </div>
        <div className="Blog-names">
          <ul>{this.state.titles}</ul>
        </div>
        <CommentForm blogId={this.state.blogs[this.state.current].id}/>
      </div>
    } else {
      return <h1>Loading</h1>;
    }

  }
}

export default BlogAndSide;