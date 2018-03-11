var React = require('react');
var createReactClass = require('create-react-class');

var TextInput = require('../shared/text_input');

var AuthorForm = createReactClass({
  render: function() {
    return (
      <form className={(this.props.submitted) ? "needs-validation was-validated" : "needs-validation"}>
        <TextInput
          name="firstName"
          label="First Name :"
          onChange={this.props.onChange}
          placeholder="First Name"
          value={this.props.author.firstName}
          minLength={3}
          required={true}
          feedback={this.props.errors.firstName} />
        <TextInput
          name="lastName"
          label="Last Name :"
          onChange={this.props.onChange}
          placeholder="Last Name"
          value={this.props.author.lastName}
          minLength={3}
          required={true}
          feedback={this.props.errors.lastName} />
        <button type="submit" className="btn btn-secondary" onClick={this.props.onSave}>Submit</button>
      </form>
  )
  }
})

module.exports = AuthorForm;