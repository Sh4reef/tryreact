
var Dispatcher = require('../dispatcher');
var AuthorApi = require('../api/author_api');

var AuthorActions = {
  createAuthor: function(author) {
    var newAuthor = AuthorApi.saveAuthor(author);
    Dispatcher.dispatch({
      actionType: 'CREATE_AUTHOR',
      author: newAuthor
    })
  },
  updateAuthor: function (author) {
    var updatedAuthor = AuthorApi.saveAuthor(author);
    Dispatcher.dispatch({
      actionType: 'UPDATE_AUTHOR',
      author: updatedAuthor
    })
  },
  deleteAuthor: function (id) {
    AuthorApi.deleteAuthor(id);
    Dispatcher.dispatch({
      actionType: 'DELETE_AUTHOR',
      id: id
    })
  }

}

module.exports = AuthorActions;