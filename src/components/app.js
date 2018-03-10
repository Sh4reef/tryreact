var React = require('react')
var createReactClass = require('create-react-class');
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;

var Header = require('./header')
var Routes = require('../routes');

var App = createReactClass({
  render: function () {
    return (
      <Router>
        <div id="main-container">
          <Header />
          <Routes />
        </div>
      </Router>
    )
  }
});

module.exports = App;