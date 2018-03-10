var React = require('react');
var createReactClass = require('create-react-class');

function Home(props) {
  return React.createElement('div', {className: 'jumbotron'},
    React.createElement('h1', {className: 'display-4'},
    'Hello, world!'),
    React.createElement('p', {className: 'lead'}, 
    `
    This is a simple hero unit,
    a simple jumbotron-style 
    component for calling extra 
    attention to featured content or 
    information.
    `),
    React.createElement('hr', {className: 'my-4'}),
    React.createElement('p', null, 
    `It uses utility classes 
    for typography and spacing 
    to space content out within 
    the larger container.`),
    React.createElement('p', {className: 'lead'},
    React.createElement(
    'a', 
    {
      className: 'btn btn-primary btn-lg',
      href: '#',
      role: 'button'
    }, 
    'Learn more'))
  )
}

module.exports = Home;