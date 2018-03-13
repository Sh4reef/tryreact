var React = require('react');
var ReactRouter = require('react-router-dom');
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;
var Redirect = ReactRouter.Redirect;

var AboutPage = require('./components/about_page');
var AuthorPage = require('./components/author_page');
var CoursePage = require('./components/course_page');
var HomePage = require('./components/home_page');
var ManageAuthorPage = require('./components/manage_author_page');
var ManageCoursePage = require('./components/manage_course_page');
var PageNotFound = require('./components/page_not_found');

var Routes = function(props) {
  return (
    <Switch>
      <Redirect exact from="/" to="/home" />
      <Route path="/home" component={HomePage} />
      <Route path="/authors" component={AuthorPage} />
      <Route exact path="/author" component={ManageAuthorPage} />
      <Route path="/author/:id" component={ManageAuthorPage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/courses" component={CoursePage} />
      <Route exact path="/course" component={ManageCoursePage} />
      <Route path="/course/:id" component={ManageCoursePage} />
      <Route component={PageNotFound} />
    </Switch>
  )
}

module.exports = Routes;