var React = require('react');
var ReactDOM = require('react-dom');
require('./index.css');
import 'bootstrap/dist/css/bootstrap.css';
var App = require('./components/App');
import store from './store';
import { Provider } from 'react-redux' ;


ReactDOM.render(
  <Provider store={store}>
  <App /></Provider>,
  document.getElementById('app')
)