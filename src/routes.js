var React = require('react');
var ReactRouter = require('react-router-dom');
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;
var Redirect = ReactRouter.Redirect;

var HomePage = require('./components/home_page');
var AuthorPage = require('./components/authors_page');
var ManageAuthorPage = require('./components/manage_author_page');
var AboutPage = require('./components/about_page');
var PageNotFound = require('./components/page_not_found');

var PrivateRoute = require('./shared/private_route');
var FakeAuth = require('./api/auth_api');

var Routes = function(props) {
  return (
    <Switch>
      <Redirect exact from="/" to="/home" />
      <Route path="/home" component={HomePage} />
      <PrivateRoute path="/authors" component={AuthorPage} />
      <Route exact path="/author" component={ManageAuthorPage} />
      <Route path="/author/:id" component={ManageAuthorPage} />
      <Route path="/about" component={AboutPage} />
      <Route component={PageNotFound} />
    </Switch>
  )
}

module.exports = Routes;