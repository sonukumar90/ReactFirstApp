import React, { Component } from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import PostForm from './Components/PostForm'
import Posts from './Components/Posts'
import App from './App'

class Routes extends Component {

    render() {
        return (
        <Router>
          <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/PostForm">Users</Link>
            </li>
            <li>
              <Link to="/Posts">Contact</Link>
            </li>
          </ul>
            <Route path="/" component={App} />
            <Route path="/PostForm" component={PostForm} />
            <Route path="/Posts" component={Posts} />
          </div>
        </Router>
        )};

}

export default Routes