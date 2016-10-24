import React from 'react';
import { Router, Route, IndexRoute, Redirect, browserHistory } from 'react-router';

import Layout from './components/layout.jsx';
import Index from './components/index.jsx';
import About from './components/about.jsx';
import Error403 from './components/403.jsx';
import Error404 from './components/404.jsx';

module.exports = (
  <Router history={browserHistory}>
    <Route path='/' component={ Layout }>
      <IndexRoute component={ Index } />
      <Route path='about' component={ About } />
      <Route path='403' component={ Error403 } />
      <Route path='*' component={ Error404 } />
    </Route>
  </Router>
);
