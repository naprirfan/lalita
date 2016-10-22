import React from 'react';
import { Router, Route, IndexRoute, Redirect, browserHistory } from 'react-router';

import Layout from './views/layout.jsx';
import Index from './views/index.jsx';
import Error404 from './views/404.jsx';

module.exports = (
  <Router history={browserHistory}>
    <Route path='/' component={ Layout }>
      <IndexRoute component={ Index } />
      <Route path='*' component={ Error404 } />
    </Route>
  </Router>
);
