import React, { Component } from "react";
import { connect } from "react-redux";
import { singleFetchPosts } from "../action/postAction";

class SinglePost extends Component {
 
  componentDidMount() {
    //const { match: { params } } = this.props;
    this.props.singleFetchPosts(this.props.match.params.id);
  }
  renderTableData() {
      console.log("props.singleItem"+this.props.posts);
  //  return this.props.posts.map(post => {
      return (
        <tr key={this.props.posts.id}>
          <td>{this.props.posts.firstName}</td>
          <td>{this.props.posts.lastName}</td>
          <td>{this.props.posts.address1}</td>
          <td>{this.props.posts.id}</td>
        </tr>
      );
    //});
  }
  render() {
    return (
      <div>
        <h1 id="title">React Dynamic Table</h1>
        <table id="post">
          <tbody>{this.renderTableData()}</tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  posts: state.posts.singleItem
});
export default connect(
  mapStateToProps,
  { singleFetchPosts }
)(SinglePost);
