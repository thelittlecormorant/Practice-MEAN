var Todos = require('../models/todoModel');


module.exports = function(app){
    app.get('/api/setupTodos',function(req,res){

        //send database
        var starterTodo = [
            {
                username:'root',
                todo:'Buy milk',
                isDone: false,
                hasAttachment: false
            },
            {
                username:'root',
                todo:'Feed dog',
                isDone: false,
                hasAttachment: false
            },
            {
                username:'root',
                todo:'Learn Node',
                isDone: false,
                hasAttachment: false
            }
        ];

        Todos.create(starterTodo,function(err, results){
            res.send(results);
        });
    });
}