var React = require('react');
var createReactClass = require('create-react-class');

var AuthorStore = require('../stores/author_store');
var CourseActions = require('../actions/course_actions');
var CourseStore = require('../stores/course_store');
var CourseForm = require('./course_form');

var ManageCoursePage = createReactClass({
  getInitialState: function() {
    return {
      course: {
        id: '',
        title: '',
        watchHref: "http://www.pluralsight.com/courses/writing-clean-code-humans",
        author: {id: '', name: ''},
        length: '',
        category: ''
      },
      authors: AuthorStore.getAllAuthors(),
      errors: {
        title: '',
        author: '',
        length: '',
        category: ''

      },
      submitted: false,
      dirty: false
    }
  },
  componentWillMount: function() {
    var courseId = this.props.match.params.id;
    if (courseId) {
      this.setState({
        course: CourseStore.getCourseById(courseId)
      })
    }
  },
  selectAuthor: function(event) {
    var author = AuthorStore.getAllAuthors().find(function(author) {
      return author.id === event.target.value
    })
    var course = Object.create(this.state.course);
    course.author = {id: author.id, name: `${author.firstName} ${author.lastName}`}
    this.setState({
      course: course
    })
  },
  setCourseState: function(event) {
    this.state.course[event.target.name] = event.target.value;
    this.setState({
      course: this.state.course
    })
  },
  courseFormIsValid: function() {
    var errors = {};
    var formIsValid = true;
    if (this.state.course.title.length < 10) {
      errors.title = 'Title must be at least 10 characters.'
      formIsValid = false;
    }
    if (this.state.course.author.id.length === 0) {
      errors.author = 'Please select an author.'
      formIsValid = false;
    }
    if (this.state.course.category.length < 2) {
      errors.category = 'Category must be at least 2 characters.'
      formIsValid = false;
    }
    
    var lengthRegex = /^\d{1,2}:\d{1,2}$/;
    if (!lengthRegex.test(this.state.course.length)) {
      errors.length = 'Length must be in this format hh:mm'
      formIsValid = false;
    }
    this.setState({errors: errors})
    console.log(formIsValid)
    return formIsValid;
  },
  saveCourse: function(event) {
    event.preventDefault();
    this.setState({submitted: true})
    if (!this.courseFormIsValid()) {
      return
    }
    if (this.state.course.id) {
      CourseActions.updateCourse(this.state.course);
    } else {
      CourseActions.createCourse(this.state.course);
    }
    this.props.history.push('/courses')
  },
  render: function() {
    return (
      <div className="container my-5">
        <h1>Manage Course</h1>
        <CourseForm
                  course={this.state.course}
                  authors={this.state.authors}
                  onChange={this.setCourseState}
                  selectAuthor={this.selectAuthor}
                  onSave={this.saveCourse}
                  submitted={this.state.submitted}
                  errors={this.state.errors} />
      </div>
    )
  }
})

module.exports = ManageCoursePage;