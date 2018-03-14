
var React = require('react');
var ReactDOM = require('react-dom');
require('bootstrap');

var App = require('./components/app');
var InitializeActions = require('./actions/init_actions');

InitializeActions.InitApp();

ReactDOM.render(<App />, document.getElementById('root'));