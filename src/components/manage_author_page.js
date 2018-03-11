var React = require('react');
var createReactClass = require('create-react-class');
var Prompt = require('react-router-dom').Prompt;
var Redirect = require('react-router-dom').Redirect;

var AuthorForm = require('./author_form');
var AuthorApi = require('../api/author_api');

var ManageAuthorPage = createReactClass({
  getInitialState: function() {
    return {
      author: {id: '', firstName: '', lastName: ''},
      errors: {firstName: '', lastName: ''},
      submitted: false,
      dirty: false,
    }
  },
  componentWillMount: function() {
    var authorId = this.props.match.params.id;
    if (authorId) {
      this.setState({author: AuthorApi.getAuthorById(authorId)})
    }
  },
  setAuthorState: function(event) {
    this.setState({dirty: true});
    this.state.author[event.target.name] = event.target.value;
    this.setState({
      author: this.state.author
    })
  },
  authorFormIsValid: function() {
    var formIsValid = true;
    var errors = {};
    if (this.state.author.firstName.length < 3) {
      errors.firstName = 'First name must be at least 3 characters.';
      formIsValid = false;
    } 
    if (this.state.author.lastName.length < 3) {
      errors.lastName = 'Last name must be at least 3 characters.';
      formIsValid = false;
    }
    this.setState({errors: errors})
    return formIsValid;
  },
  saveAuthor: function(event) {
    event.preventDefault();
    this.setState({ submitted: true })
    if (!this.authorFormIsValid()) {
      return;
    }
    AuthorApi.saveAuthor(this.state.author);
    this.props.history.push('/authors')
  },
  render: function() {
    return (
      <div className="container my-5">
        <h1>Manage author</h1>
        <AuthorForm 
          author={this.state.author}
          onChange={this.setAuthorState}
          onSave={this.saveAuthor}
          errors={this.state.errors}
          submitted={this.state.submitted} />
      </div>
    )
  }
})

module.exports = ManageAuthorPage;