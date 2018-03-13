
var Dispatcher = require('../dispatcher');
var CourseApi = require('../api/course_api');

var CourseActions = {
  createCourse: function (course) {
    var newCourse = CourseApi.saveCourse(course);
    Dispatcher.dispatch({
      actionType: 'CREATE_COURSE',
      course: newCourse
    })
  },
  updateCourse: function (course) {
    var updatedCourse = CourseApi.saveCourse(course);
    Dispatcher.dispatch({
      actionType: 'UPDATE_COURSE',
      course: updatedCourse
    })
  },
  deleteCourse: function (id) {
    CourseApi.deleteCourse(id);
    Dispatcher.dispatch({
      actionType: 'DELETE_COURSE',
      id: id
    })
  }

}

module.exports = CourseActions;