//mysql

var express = require('express');

var app = express();

var mysql = require('mysql');

var apiController = require('./controllers/apiController');

var htmlController = require('./controllers/htmlController');

var port = process.env.PORT || 3000;


app.use('/assets', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');





app.get('/', function (req, res) {
    console.log('Request Url:' + req.url);
    var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "root",
        database: "tutorial"
    });

    con.query('select People.ID, Firstname, Lastname, Address from People INNER JOIN PersonAdresses ON People.ID = PersonAdresses.PersonID inner join Address ON PersonAdresses.AddressID = Address.ID;',
        function (err, rows) {
            if (err) throw err;
            console.log(rows[0].Firstname);
        });
    console.log('hi');
    res.render('index');
})


apiController(app);
htmlController(app);

app.listen(port);


//express

var express = require('express');
var app=express();

var port = process.env.PORT || 3000;

app.use('/test',express.static(__dirname+'/public'));

app.get('/',function(req,res){
    res.send('<html><head><link href=test/style.css type=text/css rel=stylesheet/></head><body><h1>Hi</h1></body></html>')
});

app.get('/person/:id',function(req,res){
    res.send(`<html><head></head><body><h1>Person:${req.params.id}</h1></body></html>`)
});




app.get('/api',function(req,res){
    res.json({firstname:'Jon',lastname:'Doe'});
});



app.listen(port);


//date-moment
var moment = require('moment');
console.log(moment().format("ddd,hA"));

var util =require('util');

function Person(){
    this.firstname='John';
    this.lastname = 'Doe';
}

Person.prototype.greet =function(){
    console.log('Hello' +this.firstname+' '+this.lastname);
}

function Policeman(){
    Person.call(this);
    this.badgenumber = '1234';
}

util.inherits(Policeman, Person);
var officer = new Policeman();
officer.greet();


class Person{
    constructor(firstname,lastname){
        this.firstname=firstname;
        this.lastname=lastname;
    }
    greet(){
        console.log('Hello' +this.firstname+' '+this.lastname);
    }
}


var john=new Person('John','Doe');
john.greet();

var jane=new Person('Jane','Doe');
jane.greet();

console.log(john.__proto__);
console.log(jane.__proto__);
console.log(john.__proto__===jane.__proto__);

'use strict';

var Greetr=require('./greeter');

var greeter1=new Greetr();
greeter1.on('greet',function(data){
    console.log('someone greeted!.'+data);
});

greeter1.greet('John');

var buf=new Buffer('Hello','utf8');
console.log(buf.toString());
console.log(buf.toJSON());
console.log(buf[2]);
buf.write('wo');
console.log(buf);

var buffer=new ArrayBuffer(8);
var view = new Int32Array(buffer);
view[0]=5;
view[1]=15;
view[2]=30;
console.log(view.toString());

function greet(callback){
    console.log('Hello');
    var data={
        name:'John'
    };
    callback(data);
}

greet(function(data){
    console.log('THe callback');
    console.log(data);
});

greet(function(data){
    console.log('Second callback');
    console.log(data.name);
});


var fs = require('fs');

var greet = fs.readFileSync(__dirname + '/greet.txt','utf8');
console.log(greet);

var greet2=fs.readFile(__dirname +'/greet.txt','utf8',
function(err,data){
        console.log(data);
});

console.log('Done!');

var fs=require('fs');
var zlib=require('zlib');

var readable = fs.createReadStream(__dirname+'/sample.txt');

var writable = fs.createWriteStream(__dirname+'/samplecopy.txt');

var compressed = fs.createWriteStream(__dirname+'/samplecopy.txt.gz');

var gzip=zlib.createGzip();

readable.pipe(writable);

readable.pipe(gzip).pipe(compressed);


//routing
var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {


    if (req.url === '/') {
        fs.createReadStream(__dirname + '/index.html').pipe(res);
    }
    else if (req.url === '/api') {
        res.writeHead(200, { 'Content-Type': 'text/json' });
        var obj = {
            firstname: 'John',
            lastname: 'doe'
        };

        res.end(JSON.stringify(obj));

    }
    else {
        res.writeHead(404);
        res.end();
    }


}).listen(1337, '127.0.0.1');