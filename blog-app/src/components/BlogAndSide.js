import React, {Component} from 'react';
import ListItem from "./ListItem";
import CommentForm from "./CommentForm";
import CommentList from "./CommentList";
import Login from "./Login";
import BlogPostForm from "./BlogPostForm";
import Modify from "./Modify";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import './BlogAndSide.css';
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import Search from "./Search";
import Like from "./Like";

class BlogAndSide extends Component {
  BASE_URL = 'http://localhost:8080';
  listOfBlogTitles = [];

  constructor(props) {
    super(props);
    this.state = {'blogs': '', 'current': -1, 'auth': props.auth, 'modify': false};
    this.updateList = this.updateList.bind(this);
    this.change = this.change.bind(this);
    this.toggleModify = this.toggleModify.bind(this);
    this.filter = this.filter.bind(this);
  }

  componentDidMount() {
    this.updateList();
  }

  toggleModify() {
    this.setState({'modify': !this.state.modify});
  }

  updateList() {
    fetch(this.BASE_URL + '/posts').then(http => http.json()).then(json => {
      let state = {
        'blogs': json,
        'titles': json.map((i, index) => <ListItem auht={this.state.auth} key={i.id} name={i.title} id={i.id}
                                                   listId={index} click={this.change} update={this.updateList}/>),
        'current': this.state.current === -1 ? 0 : this.state.current,
        'modify': false
      };
      //console.log('here '  + state.blogs[0].id);
      this.setState(state);
      this.listOfBlogTitles = state.titles;
    });
  }


  change(listId) {
    //console.log(listId);
    let state = {'current': listId};
    this.setState(state);
  }

  filter(searchText){
    let list = this.listOfBlogTitles.filter(i => {
      return i.props.name.toLowerCase().search(searchText.toLowerCase()) !== -1;
    });
    this.setState({'titles': list});
  }

  render() {
    if (this.state.current !== -1) {
      //console.log(this.state.blogs[this.state.current].commentList);
      if (!this.state.auth) {
        return <div>
          <Login auth={this.state.auth}/>
          <Container fluid>
            <Row className="page">
              <Col md={{order: 2, span: 8}}>
                <h1>{this.state.blogs[this.state.current].title}</h1>
                <h3>{this.state.blogs[this.state.current].author} {this.state.blogs[this.state.current].creationDate}</h3>
                <p>{this.state.blogs[this.state.current].post.split('\n').map((item, key) => (
                  <span key={key}>{item}<br/></span>))}</p>
                <Like blogId={this.state.blogs[this.state.current].id} likes={this.state.blogs[this.state.current].likes}/>
              </Col>
              <Col md={{order: 1, span: "auto"}}>
                <h4>Search for blog posts:</h4>
                <Search callBack={this.filter}/>
                <h4>Blog posts:</h4>
                <ul>{this.state.titles}</ul>
              </Col>
            </Row></Container>
          <Jumbotron>
            <h2>Comment this blog post</h2>
            <CommentForm style={{clear: 'both'}} blogId={this.state.blogs[this.state.current].id}
                         buttonClicked={this.updateList}/>
          </Jumbotron>
          <h2>Comments:</h2>
          <CommentList blogId={this.state.blogs[this.state.current].id} auth={this.state.auth}
                       list={this.state.blogs[this.state.current].commentList}/>
        </div>
      } else {
        let id = this.state.blogs[this.state.current].id;
        return <div className="page">
          <Login auth={this.state.auth}/>
          <Container fluid>
            <Row className="page">
              <Col md={{order: 2, span: 8}}>
                <h1>{this.state.blogs[this.state.current].title}</h1>
                <h3>{this.state.blogs[this.state.current].author} {this.state.blogs[this.state.current].creationDate}</h3>
                <p>{this.state.blogs[this.state.current].post.split('\n').map((item, key) => (
                  <span key={key}>{item}<br/></span>))}</p>
                <Button variant="warning" onClick={this.toggleModify}>Modify</Button>
                <Modify modify={this.state.modify} blog={this.state.blogs[this.state.current]} blogId={id}
                        update={this.updateList}/>
              </Col>
              <Col md={{order: 1, span: 3}}>
                <h4>Search for blog posts:</h4>
                <Search callBack={this.filter}/>
                <h4>Blog posts:</h4>
                <ul>{this.state.titles}</ul>
                <h2>Create new blog post</h2>
                <BlogPostForm update={this.updateList}/>
              </Col>
            </Row>
          </Container>
          <h2>Comments:</h2>
          <CommentList update={this.updateList} blogId={id} auth={this.state.auth}
                       list={this.state.blogs[this.state.current].commentList}/>

        </div>
      }

    } else {
      return <h1>Loading</h1>;
    }

  }
}

export default BlogAndSide;