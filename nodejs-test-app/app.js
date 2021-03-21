var express =require('express');
var app=express();


var port = process.env.PORT || 3000;

var people = [
    {
        name: 'John Doe'
    },
    {
        name: 'Jane Doe'
    },
    {
        name: 'Jim Doe'
    }
];

var god=[
    'zeus','a','b'
];

app.set('view engine','ejs');
app.use('/assets',express.static(__dirname+'/public'));


app.get('/',function(req,res){
    res.render('index',{
        serverPeople:people,
        god:god
    });
});

app.listen(port);