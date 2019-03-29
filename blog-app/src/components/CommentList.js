import React, {Component} from "react";

class CommentList  extends Component{
  constructor(props){
    super(props);
    this.list =props.list.map(i => <tr key={i.id}><td>{i.nickname}</td><td>{i.commentTitle}</td><td>{i.commentField}</td></tr>);
  }

  render(){
    this.list = this.props.list.map(i => <tr key={i.id}><td>{i.nickname}</td><td>{i.commentTitle}</td><td>{i.commentField}</td></tr>);
    return <table><tbody>{this.list}</tbody></table>
  }
}

export default CommentList;