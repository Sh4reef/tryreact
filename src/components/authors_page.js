var React = require('react');
var createReactClass = require('create-react-class');
var PropTypes = require('prop-types');
var Link = require('react-router-dom').Link;

var AuthorApi = require('../api/author_api');
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
      authors: AuthorApi.getAllAuthors()
    })
  },
  render: function() {
    return (
      <div className="container">
        <h1 className="my-4">Authors</h1>
        <Link className="btn btn-secondary mb-4" to="/author">Add Author</Link>
        <AuthorList authors={this.state.authors} />
      </div>
    )
  }
})

module.exports = AuthorPage;