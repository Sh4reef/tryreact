var Dispatcher = require('../dispatcher');

var ChangeListener = require('./change_listener');
var _courses = [];

Dispatcher.register(function (action) {
  switch (action.actionType) {
    case 'INIT_APP':
      _courses = action.initData.courses
      CourseStore.emitChange();
      break;
    case 'CREATE_COURSE':
      _courses.push(action.course)
      CourseStore.emitChange();
      break;
    case 'UPDATE_COURSE':
      var existingCourse = _courses.find(function(course) {
        return course.id === action.course.id;
      })
      var existingCourseIndex = _courses.indexOf(existingCourse)
      _courses.splice(existingCourseIndex, 1, action.course)
      CourseStore.emitChange();
      break;
    case 'DELETE_COURSE':
      _courses = _courses.filter(function (course) {
        return course.id !== action.id
      })
      CourseStore.emitChange();
      break;
    default:
  }
})

var CourseStore = Object.assign({}, ChangeListener, {
  getAllCourses: function() {
    return _courses;
  },
  getCourseById: function(id) {
    return _courses.find(function (course) {
      return course.id === id;
    })
  }
})

module.exports = CourseStore;