import React, { Component } from 'react';
import Header from './header.jsx';

export default class Layout extends Component {
  render() {
    return (
      <html>
        <head>
          <meta charSet='utf-8' />
          <title>React Engine Example App</title>
          <link rel='stylesheet' href='/styles.css'></link>
        </head>
        <body>
          <Header />
          <div>
            {this.props.children}
          </div>
          <script src='/bundle.js'></script>
        </body>
      </html>
    );
  }
}
