import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <div>
        <p>Navigation</p>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About us (public page)</a></li>
          <li><a href="/me">My profie (protected page that needs authentication)</a></li>
          <li><a href="/signin">Sign In</a></li>
        </ul>
      </div>
    )
  }
}
