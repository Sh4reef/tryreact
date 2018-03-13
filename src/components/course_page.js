var React = require('react');
var createReactClass = require('create-react-class');
var Link = require('react-router-dom').Link;

var CourseStore = require('../stores/course_store');
var CourseList = require('./course_list');

var CoursePage = createReactClass({
  getInitialState: function() {
    return {
      courses: CourseStore.getAllCourses()
    }
  },
  componentWillMount: function () {
    CourseStore.addChangeListener(this._onChange);
  },
  componentWillUnmount: function () {
    CourseStore.removeChangeListener(this._onChange);
  },
  _onChange: function () {
    this.setState({ courses: CourseStore.getAllCourses() })
  },
  render: function() {
    return (
      <div className="container my-5">
        <h1 className="mb-4">Courses</h1>
        <Link className="btn btn-secondary mb-4" to="/course">Add Course</Link>
        <CourseList courses={this.state.courses} />
      </div>
    )
  }
})

module.exports = CoursePage