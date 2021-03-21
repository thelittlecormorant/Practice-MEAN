var bodyParser = require('body-parser');

module.exports = function(app){
    app.post('/api/person',function(req,res){
        res.send('person');
    });
    
    app.get('/api/person/:id',function(req,res){
        res.send(req.params.id);
    });

    app.get('/api/person',function(req,res){
        res.send('now works');
    })
    
    app.delete('/api/person/:id',function(req,res){
        res.send(req.params.id);
    });
};