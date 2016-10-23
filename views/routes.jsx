import React from 'react';
import { Router, Route, IndexRoute, Redirect, browserHistory } from 'react-router';

import Layout from './components/layout.jsx';
import Index from './components/index.jsx';
import Error404 from './components/404.jsx';

module.exports = (
  <Router history={browserHistory}>
    <Route path='/' component={ Layout }>
      <IndexRoute component={ Index } />
      <Route path='*' component={ Error404 } />
    </Route>
  </Router>
);
