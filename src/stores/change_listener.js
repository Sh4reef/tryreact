var EventEmitter = require('events').EventEmitter;

module.exports = Object.assign({}, EventEmitter.prototype, {
  addChangeListener: function (callback) {
    this.on('change', callback);
  },
  removeChangeListener: function (callback) {
    this.removeListener('change', callback);
  },
  emitChange: function () {
    this.emit('change');
  },
})