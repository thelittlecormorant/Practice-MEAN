var mongoose = require('mongoose');

var schema = mongoose.Schema;

var todoSchema = new schema({
    username: String,
    todo: String,
    isDone: Boolean,
    hasAttachment: Boolean
});

var Todos = mongoose.model('Todos',todoSchema);

module.exports = Todos;