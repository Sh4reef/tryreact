var React = require('react');
var createReactClass = require('create-react-class');
var PropTypes = require('prop-types');

var TextInput = createReactClass({
  propTypes: {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    required: PropTypes.bool
  },
  render: function() {
    return (
        <div className="form-group">
          <label htmlFor={this.props.name}>{this.props.label}</label>
          <input type="text"
            name={this.props.name}
            className="form-control"
            placeholder={this.props.placeholder}
            ref={this.props.name}
            onChange={this.props.onChange}
            minLength={this.props.minLength}
            maxLength={this.props.maxLength}
            value={this.props.value} required={this.props.required}/>
          <div className="invalid-feedback">
            {this.props.feedback}
          </div>
        </div>
    )
  }
})

module.exports = TextInput;