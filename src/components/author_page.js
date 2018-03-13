var React = require('react');
var createReactClass = require('create-react-class');
var PropTypes = require('prop-types');
var Link = require('react-router-dom').Link;

var AuthorStore = require('../stores/author_store');
var AuthorList = require('./author_list');

var AuthorPage = createReactClass({
  PropTypes: {
    authors: PropTypes.array.isRequired
  },
  getInitialState: function() {
    return {
      authors: []
    }
  },
  componentWillMount: function() {
    this.setState({
      authors: AuthorStore.getAllAuthors()
    })
    AuthorStore.addChangeListener(this._onChange);
  },
  componentWillUnmount: function() {
    AuthorStore.removeChangeListener(this._onChange)
  },
  _onChange: function() {
    this.setState({authors: AuthorStore.getAllAuthors()})
  },
  render: function() {
    return (
      <div className="container my-5">
        <h1 className="mb-4">Authors</h1>
        <Link className="btn btn-secondary mb-4" to="/author">Add Author</Link>
        <AuthorList authors={this.state.authors} />
      </div>
    )
  }
})

module.exports = AuthorPage;