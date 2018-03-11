var React = require('react');
var createReactClass = require('create-react-class');

var Link = require('react-router-dom').Link;

var AuthorList = createReactClass({
  render: function () {
    function createAuthorRow(author) {
      return (
        <tr key={author.id}>
          <th scope="row"><Link to={`/author/${author.id}`}>{author.id}</Link></th>
          <td >{author.firstName}</td>
        </tr>
      )
    }
    return (
      <table className="table">
        <thead>
          <tr>
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