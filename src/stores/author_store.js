var Dispatcher = require('../dispatcher');

var ChangeListener = require('./change_listener');
var _authors = [];

Dispatcher.register(function(action) {
  switch (action.actionType) {
    case 'INIT_APP':
      _authors = action.initData.authors
      AuthorStore.emitChange();
      break;
    case 'CREATE_AUTHOR':
      _authors.push(action.author)
      AuthorStore.emitChange();
      break;
    case 'UPDATE_AUTHOR':
      var existingAuthor = _authors.find(function(author) {
        return author.id === action.author.id;
      })
      var existingAuthorIndex = _authors.indexOf(existingAuthor)
      _authors.splice(existingAuthorIndex, 1, action.author)
      AuthorStore.emitChange();
      break;
    case 'DELETE_AUTHOR':
      _authors = _authors.filter(function(author) {
        return author.id !== action.id
      })
      AuthorStore.emitChange();
      break;
    default:
  }
})

var AuthorStore = Object.assign({}, ChangeListener, {
  getAllAuthors: function() {
    return _authors;
  },
  getAuthorById: function(id) {
    return _authors.find(function(author) {
      return author.id === id;
    })
  }
})

module.exports = AuthorStore;