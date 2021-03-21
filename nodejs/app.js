var express = require('express');

var app = express();

var mongoose = require('mongoose');

mongoose.connect('mongodb+srv://root:root@cluster0.1wi55.mongodb.net/addressbook?retryWrites=true&w=majority');

var Schema=mongoose.Schema;

var personSchema = new Schema({
    id: String,
    name: String,
    address:String
});

var Person = mongoose.model('Person',personSchema);
var john = Person({
    id: 1,
    name: 'John',
    address: 'Bglr'
});

john.save(function(err){
    if(err) throw err;
    console.log('person saved!');
});

var jane = Person({
    id: 2,
    name: 'Jane',
    address: 'Bglr'
});

jane.save(function(err){
    if(err) throw err;
    console.log('person saved!');
});

var apiController = require('./controllers/apiController');

var htmlController = require('./controllers/htmlController');

var port = process.env.PORT || 3000;


app.use('/assets', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');


app.use('/',function(req,res,next){
    console.log('Request Url'+req.url);

    Person.find({},function(err,users) {
        if(err) 
        throw err;
        console.log(users);

    });

    next();
})


app.get('/', function (req, res) {
    
    console.log('hi');
    res.render('index');
})


apiController(app);
htmlController(app);

app.listen(port);