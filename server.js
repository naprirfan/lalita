'use strict';

import { join } from 'path';
import express from 'express';
import favicon from 'serve-favicon';
import ReactEngine from 'react-engine';
import routes from './views/routes.jsx';
import { PORT } from './config';

let app = express();

// create the view engine with `react-engine`
let engine = ReactEngine.server.create({
  routes: routes,
  routesFilePath: join(__dirname, '/views/routes.jsx'),
  performanceCollector: function(stats) {
    console.log(stats);
  }
});

// set the engine
app.engine('.jsx', engine);

// set the view directory
app.set('views', join(__dirname, '/views/components'));

// set jsx as the view engine
app.set('view engine', 'jsx');

// finally, set the custom view
app.set('view', ReactEngine.expressView);

// expose public folder as static assets
app.use(express.static(join(__dirname, '/views')));

app.use(favicon(join(__dirname, '/views/favicon.ico')));

// add our app routes
app.get('/me', function(req, res) {
  res.redirect('/403')
});

app.get('/403', function(req, res) {
  res.status(403).render(req.url);
})

app.get('*', function(req, res) {
  res.render(req.url);
});

app.use(function(err, req, res, next) {
  console.error(err);

  // http://expressjs.com/en/guide/error-handling.html
  if (res.headersSent) {
    return next(err);
  }

  if (err._type && err._type === ReactEngine.reactRouterServerErrors.MATCH_REDIRECT) {
    return res.redirect(302, err.redirectLocation);
  }
  else if (err._type && err._type === ReactEngine.reactRouterServerErrors.MATCH_NOT_FOUND) {
    return res.status(404).render(req.url);
  }
  else {
    // for ReactEngine.reactRouterServerErrors.MATCH_INTERNAL_ERROR or
    // any other error we just send the error message back
    return res.status(500).render('500.jsx', {
      err: {
        message: err.message,
        stack: err.stack
      }
    });
  }
});

const server = app.listen(PORT, function() {
  console.log('Example app listening at http://localhost:%s', PORT);
});
