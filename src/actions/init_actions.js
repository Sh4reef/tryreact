
var Dispatcher = require('../dispatcher');

var AuthorApi = require('../api/author_api');
var CourseApi = require('../api/course_api');

var InitializeActions = {
  InitApp: function() {
    Dispatcher.dispatch({
      actionType: 'INIT_APP',
      initData: {
        authors: AuthorApi.getAllAuthors(),
        courses: CourseApi.getAllCourses()
      }
    })
  }
}

module.exports = InitializeActions;