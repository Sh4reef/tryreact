var React = require('react');
var createReactClass = require('create-react-class');
var Link = require('react-router-dom').Link;

function Home(props) {
  return React.createElement('div', {className: 'jumbotron'},
    React.createElement('h1', {className: 'display-4'},
    'Pluralsight Administration'),
    React.createElement('p', {className: 'lead'}, 
    `
    React, React Router, And Flux for ultra-responsive web apps.
    `),
    React.createElement('hr', {className: 'my-4'}),
    React.createElement('p', {className: 'lead'},
    (<Link className="btn btn-primary" to="/about">Learn more</Link>))
  )
}

module.exports = Home;