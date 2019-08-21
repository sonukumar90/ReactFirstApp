import React, { Component } from "react";
import Posts from "./Components/Posts";
import PostForm from "./Components/PostForm";
import SinglePost from "./Components/singlePost";
import { Provider } from "react-redux";
import store from "./store";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();
class App extends Component {
  render() {
    return (
      <Provider store={store}>
         <Router history={history}>
          <ul>
            <li>
              <Link to="/Data">Data</Link>
            </li>
            <li>
              <Link to="/AddNew">Add New</Link>
            </li>
          </ul>
          <Route path="/Data" component={PostForm} />
          <Route path="/AddNew" component={Posts} />
          <Route path="/post/:id" component={SinglePost}/> 
        </Router>
      </Provider>
    );
  }
}

export default App;
