import React, {Component} from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class CommentList  extends Component{
  BASE_URL = 'https://lone-wanderer-blog-app.herokuapp.com/comment/delete/';
  constructor(props){
    super(props);
    this.blogId = props.blogId;
    this.deleteComment = this.deleteComment.bind(this);
  }


  deleteComment(event){
    console.log(event.target.id);
    console.log(this.BASE_URL + this.blogId + '?commentId=' +event.target.id);
    fetch(this.BASE_URL + this.blogId + '?commentId=' +event.target.id).
    then(http => http.json()).then(this.props.update).catch((e) => alert(e))
  }

  render(){
    this.blogId = this.props.blogId;
    if(this.props.auth){
      this.list = this.props.list.map(comment =>
        <li key={comment.id}>
          <Container fluid>
           <Row>
             <Col xs={"auto"}><h4>{comment.commentTitle}</h4></Col>
             <Col xs={"auto"}><p>-{comment.nickname}</p> </Col>
             <Col><Button variant="danger" onClick={this.deleteComment} id={comment.id}>delete</Button></Col>
           </Row>
            <Row><p>{comment.commentField}</p></Row>
          </Container>
        </li>);
    } else {
      this.list = this.props.list.map(comment =>
        <li key={comment.id}>
          <Container fluid>
            <Row>
              <Col xs={"auto"}><h4>{comment.commentTitle}</h4></Col>
              <Col><p>-{comment.nickname}</p> </Col>
            </Row>
            <Row><p>{comment.commentField}</p></Row>
          </Container>
        </li>);
    }
    return <ul>{this.list}</ul>
  }
}

export default CommentList;