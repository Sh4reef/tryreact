
var React = require('react');
var ReactDOM = require('react-dom');
var createReactClass = require('create-react-class');

var About = require('./components/about_page');
var Authors = require('./components/authors_page');
var Header = require('./components/header')
var Home = require('./components/home_page');

(function(win){
  var App = createReactClass({
    render: function() {
      var Child;
      switch(this.props.route) {
        case 'about': Child = About; break;
        case 'authors': Child = Authors; break;
        default: Child = Home; 
      }
      return (
        <div id="main-container">
          <Header route={this.props.route} />
          <Child />
        </div>
      )
    }
  });
  
  function render() {
    var route = win.location.hash.substr(1).toLowerCase();
    ReactDOM.render(<App route={route} />, document.getElementById('root'))
  }
  win.addEventListener('hashchange', render)
  render();
}(window))