import React, { Component } from 'react';
var LoginContainer = require('../containers/Login').default;
var ReactRouter = require('react-router-dom');
var Route = ReactRouter.Route;

class EmptyLayout extends Component {
  render() {
    return (
      <div className="container">
        <Route exact path='/' component={LoginContainer} /> 
        <Route exact path='/login' component={LoginContainer} />  
      </div>
    );
  }
}
export default EmptyLayout;