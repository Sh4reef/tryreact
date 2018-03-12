var Dispatcher = require('../dispatcher');
var EventEmitter = require('events').EventEmitter;
var AuthorApi = require('../api/author_api');

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

var AuthorStore = Object.assign({}, EventEmitter.prototype, {
  addChangeListener: function(callback) {
    this.on('change', callback);
  },
  removeChangeListener: function(callback) {
    this.removeListener('change', callback);
  },
  emitChange: function() {
    this.emit('change');
  },
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