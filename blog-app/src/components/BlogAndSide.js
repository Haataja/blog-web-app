import React, {Component} from 'react';
import ListItem from "./ListItem";
import CommentForm from "./CommentForm";
import CommentList from "./CommentList";
import Login from "./Login";
import BlogPostForm from "./BlogPostForm";
//import './BlogAndSide.css';

class BlogAndSide extends Component {
  BASE_URL = 'http://localhost:8080';

  constructor(props) {
    super(props);
    this.state = {'blogs': '', 'current': -1, 'auth': props.auth};
    this.updateList = this.updateList.bind(this);
    this.change = this.change.bind(this);
    this.toggleAuth = this.toggleAuth.bind(this);
  }

  componentDidMount() {
    this.updateList();
    //this.checkLogIn();
  }

  updateList() {
    fetch(this.BASE_URL + '/posts').then(http => http.json()).then(json => {
      console.log(json);
      let state = {
        'blogs': json,
        'titles': json.map((i, index) => <ListItem auht={this.state.auth} key={i.id} name={i.title} id={i.id} listId={index} click={this.change}/>),
        'current': this.state.current === -1 ? 0: this.state.current
      };
      //console.log('here '  + state.blogs[0].id);
      this.setState(state);
    });
  }

  toggleAuth(){
    this.setState({'auth':!this.state.auth});
  }

  /*checkLogIn(){
    fetch(this.BASE_URL + '/auth',{mode: 'no-cors'}).then(http =>http.json()).then(() =>this.setState({'auth':true})).catch((e) => this.setState({'auth':false}))
  }*/


  change(listId) {
    //console.log(listId);
    let state = {'current': listId};
    this.setState(state);
  }

  render() {
    console.log(this.state.titles);
    if (this.state.current !== -1) {
      //console.log(this.state.blogs[this.state.current].commentList);
          if(!this.state.auth){
            return <div className="page">
              <Login auth={this.state.auth}/>
              <div className="title-and-text">
                <h1>{this.state.blogs[this.state.current].title}</h1>
                <h3>{this.state.blogs[this.state.current].author}  {this.state.blogs[this.state.current].creationDate}</h3>
                <p>{this.state.blogs[this.state.current].post.split('\n').map((item, key) => (
                  <span key={key}>{item}<br/></span>))}</p>
              </div>
              <div className="Blog-names">
                <ul>{this.state.titles}</ul>
              </div>
              <CommentForm blogId={this.state.blogs[this.state.current].id} buttonClicked={this.updateList}/>
              <CommentList blogId={this.state.blogs[this.state.current].id} auth={this.state.auth} list={this.state.blogs[this.state.current].commentList}/>
            </div>
          } else {
            return <div className="page">
              <Login auth={this.state.auth}/>
              <div className="title-and-text">
                <h1>{this.state.blogs[this.state.current].title}</h1>
                <h3>{this.state.blogs[this.state.current].author}  {this.state.blogs[this.state.current].creationDate}</h3>
                <p>{this.state.blogs[this.state.current].post.split('\n').map((item, key) => (
                  <span key={key}>{item}<br/></span>))}</p>
              </div>
              <div className="Blog-names">
                <ul>{this.state.titles}</ul>
              </div>
              <CommentForm blogId={this.state.blogs[this.state.current].id} buttonClicked={this.updateList}/>
              <CommentList blogId={this.state.blogs[this.state.current].id} auth={this.state.auth} list={this.state.blogs[this.state.current].commentList}/>
              <BlogPostForm/>
            </div>
          }

    } else {
      return <h1>Loading</h1>;
    }

  }
}

export default BlogAndSide;