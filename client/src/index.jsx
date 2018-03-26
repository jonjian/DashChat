// react
import React from 'react';
import ReactDOM from 'react-dom';

// components
import App from './components/App';
import Login from './components/Login';

// redux
import { Provider } from "react-redux";
import store from "./store";

import { BrowserRouter as Router, Route } from 'react-router-dom';

// Renders the dom. Route path tells the dom which component to render on which request.
// login page always first to have a username
ReactDOM.render(
  <Provider >
    <Router>
      <div>
        <Route exact path="/" component={Login} />
        <Route path="/home" component={App} />
      </div>
    </Router>
  </Provider>,
  document.getElementById('app'),
);
