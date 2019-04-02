import React, {Component} from "react";

class CommentList  extends Component{
  BASE_URL = 'http://localhost:8080/comment/delete/';
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
      this.list = this.props.list.map(comment =><li key={comment.id}><h4>{comment.commentTitle}</h4> <p>{comment.commentField}</p><p>{comment.nickname}</p>
        <button onClick={this.deleteComment} id={comment.id}>delete</button></li>);
    } else {
      this.list = this.props.list.map(comment =><li key={comment.id}><h4>{comment.commentTitle}</h4> <p>{comment.commentField}</p><p>{comment.nickname}</p></li>);
    }
    return <ul>{this.list}</ul>
  }
}

export default CommentList;