var React = require('react');
var createReactClass = require('create-react-class');
var Link = require('react-router-dom').Link;

var AuthorActions = require('../actions/author_actions');

var AuthorList = createReactClass({
  deleteAuthor: function(id, event) {
    event.preventDefault();
    AuthorActions.deleteAuthor(id)
  },
  render: function () {
    function createAuthorRow(author) {
      return (
        <tr key={author.id}>
          <th><button className="btn btn-danger btn-sm" onClick={this.deleteAuthor.bind(this, author.id)}>Delete</button></th>
          <th scope="row"><Link to={`/author/${author.id}`}>{author.id}</Link></th>
          <td >{author.firstName}</td>
        </tr>
      )
    }
    return (
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Action</th>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
          </tr>
        </thead>
        <tbody>
          {this.props.authors.map(createAuthorRow, this)}
        </tbody>
      </table>
    )
  }
})

module.exports = AuthorList;