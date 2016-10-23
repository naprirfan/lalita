import React,  { Component } from 'react';

export default class Index extends Component {
  render() {
    return (
      <div>
        <h1>Index page</h1>
        <p>Navigation</p>
        <ul>
          <li><a href="/about">About us (public page)</a></li>
          <li><a href="/me">My profie (protected page that needs authentication)</a></li>
          <li><a href="/signin">Sign In</a></li>
        </ul>
      </div>
    )
  }
}
