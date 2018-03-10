var React = require('react');
var createReactClass = require('create-react-class');

var AuthorApi = require('../api/author_api');

var Authors = createReactClass({
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
    function createAuthorRow(author) {
      return (
        <tr>
          <th scope="row">{author.id}</th>
          <td scope="row">{author.firstName}</td>
        </tr>
      )
    }
    return (
      <div className="container">
        <h1 className="my-4">Authors</h1>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
            </tr>
          </thead>
          <tbody>
            {this.state.authors.map(createAuthorRow, this)}
          </tbody>
        </table>
      </div>
    )
  }
})

module.exports = Authors;