var React = require('react');
var ReactRouter = require('react-router-dom');
var Route = ReactRouter.Route;
var Redirect = ReactRouter.Redirect;

var FakeAuth = require('../api/auth_api');

var PrivateRoute = function ({ component: Component, ...rest }) {
  
  return (
    <Route {...rest} render={function(props) {
      return FakeAuth.isAuthenticated ? (
        <Component {...props} />
      ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location }
            }}
          />
        )
    }} />
  )
}

module.exports = PrivateRoute;