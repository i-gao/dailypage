import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import './main.css';

import Navigation from './common/Navigation';
import Write from './write';
import Read from './read';

ReactDOM.render(
  <React.StrictMode><Router>
    <Navigation />
    <div id="main">
      <Switch>
        <Route path="/read">
          <Read />
        </Route>
        <Route path={["/", "write"]}>
          <Write />
        </Route>
      </Switch>
    </div>
  </Router></React.StrictMode>,
  document.getElementById('root')
);