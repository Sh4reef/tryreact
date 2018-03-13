var React = require('react');
var createReactClass = require('create-react-class');

var TextInput = require('../shared/text_input');

var CourseForm = createReactClass({
  render: function() {
    return (
      <form className={this.props.submitted ? "was-validated" : ""}>
        <TextInput
          name="title"
          label="Title :"
          placeholder="Title"
          value={this.props.course.title}
          onChange={this.props.onChange}
          required={true}
          minLength={10}
          feedback={this.props.errors.title} />
        <div className="form-group">
          <label htmlFor="exampleFormControlSelect1">Author :</label>
          <select
                className="form-control"
                id="exampleFormControlSelect1"
                onChange={this.props.selectAuthor}
                required>
            {
              function() {
                if (this.props.course.author.id.length === 0) {
                  return <option value="">Select</option>
                }
              }.call(this)
            }
            {
              this.props.authors.map(function(author) {
                return <option
                              key={author.id}
                              value={author.id}>
                              {author.firstName} {author.lastName}</option>
              })
            }
          </select>
          <div className="invalid-feedback">
            {this.props.errors.author}
          </div>
        </div>
        <TextInput
          name="category"
          label="Category :"
          placeholder="Category"
          value={this.props.course.category}
          onChange={this.props.onChange}
          required={true}
          minLength={2}
          feedback={this.props.errors.category} />
        <TextInput
          name="length"
          label="Length :"
          placeholder="Length"
          value={this.props.course.length}
          onChange={this.props.onChange}
          required={true}
          pattern="/^\d+:\d+$/"
          feedback={this.props.errors.length} />
        <button className="btn btn-secondary" onClick={this.props.onSave}>Submit</button>
      </form>
    )
  }
})

module.exports = CourseForm;