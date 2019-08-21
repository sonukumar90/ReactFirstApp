import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPosts,singleFetchPosts } from "../action/postAction";
import { Link } from 'react-router-dom';
class Posts extends Component {
  componentWillMount() {
    console.log("fatching" + this.props.fetchPosts());
    this.props.fetchPosts();
  }

  renderTableData() {
    return this.props.posts.map(post => {
      return (
        <tr key={post.id}>
          <td>{post.firstName}</td>
          <td>{post.lastName}</td>
          <td>{post.address1}</td>
          <td><Link to={`/post/${post.id}`}>{post.id}</Link></td>
        </tr>
      );
    });
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
  posts: state.posts.items
});
export default connect(
  mapStateToProps,
  { fetchPosts,singleFetchPosts }
)(Posts);
