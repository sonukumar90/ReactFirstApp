import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { createPost } from "../action/postAction";

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      address2:"",
      emailId:""
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    const post = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      mobileNo:this.state.mobileNo,
      address1:this.state.address1,
      address2:this.state.address2,
      emailId:this.state.emailId,
      password:this.state.password,
      userName:this.state.userName
    };

    this.props.createPost(post);
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(post)
    })
      .then(res => res.json())
      .then(data => console.log(data));
  }
  render() {
    return (
      <div>
        <h1>Add Form</h1>
        <form onSubmit={this.onSubmit}>
          <div>
            <label>FirstName: </label>
            <br />
            <input
              type="text"
              name="firstName"
              onChange={this.onChange}
              value={this.state.firstName}
            />
          </div>
          <br />
          <div>
            <label>LastName: </label>
            <br />
            <input
              name="lastName"
              onChange={this.onChange}
              value={this.state.lastName}
            />
          </div>
          <br />
          <div>
            <label>MobileNo: </label>
            <br />
            <input
              name="mobileNo"
              onChange={this.onChange}
              value={this.state.mobileNo}
            />
          </div>
          <br />
          <div>
            <label>Address1: </label>
            <br />
            <textarea
              name="address1"
              onChange={this.onChange}
              value={this.state.address1}
            />
          </div>
          <br />
          <div>
            <label>Address2: </label>
            <br />
            <input
              name="address2"
              onChange={this.onChange}
              value={this.state.address2}
            />
          </div>
          <br />
          <div>
            <label>EmailId: </label>
            <br />
            <input
              name="emailId"
              onChange={this.onChange}
              value={this.state.emailId}
            />
          </div>
          <br />
          <div>
            <label>Password: </label>
            <br />
            <input
              name="password" type="text"
              onChange={this.onChange}
              value={this.state.password}
            />
          </div>
          <br />
          <div>
            <label>UserName: </label>
            <br />
            <input
              name="userName"
              onChange={this.onChange}
              value={this.state.userName}
            />
          </div>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

PostForm.propTypes = {
  createPost: PropTypes.func.isRequired
};

export default connect(
  null,
  { createPost }
)(PostForm);
