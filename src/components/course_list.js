var React = require('react');
var createReactClass = require('create-react-class');
var Link = require('react-router-dom').Link;

var CourseActions = require('../actions/course_actions');

var CourseList = createReactClass({
  deleteCourse: function (id, event) {
    event.preventDefault();
    CourseActions.deleteCourse(id)
  },
  render: function () {
    function createCourseRow(course) {
      return (
        <tr key={course.id}>
          <td><button className="btn btn-danger btn-sm" onClick={this.deleteCourse.bind(this, course.id)}>Delete</button></td>
          <td><a className="btn btn-primary btn-sm">Watch</a></td>
          <td ><Link to={`/course/${course.id}`}>{course.title}</Link></td>
          <td >{course.author.name}</td>
          <td >{course.category}</td>
          <td >{course.length}</td>
        </tr>
      )
    }
    return (
      <table className="table">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col"></th>
            <th scope="col">Title</th>
            <th scope="col">Author</th>
            <th scope="col">Category</th>
            <th scope="col">Length</th>
          </tr>
        </thead>
        <tbody>
          {this.props.courses.map(createCourseRow, this)}
        </tbody>
      </table>
    )
  }
})

module.exports = CourseList;