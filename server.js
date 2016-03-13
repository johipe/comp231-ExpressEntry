process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var mongoose = require('./config/mongoose'),
     express = require('./config/express'),
     passport = require('./config/passport');

var db = mongoose();
var app = express();
var passport = passport();

app.listen(3000);
module.exports = app;

console.log('Server running at htt[://localhost:3000/');


//var express = require("express");
//var app = express();

//Second example
/*
app.get('/',function(req,res){
    
    res.send('this is a GET request');
});

app.post('/', function(req, res){
    res.send('This is a POST request');
    
});
*/

//Middelware example
/*app.route('/').get(function(req,res){
    res.send('this is a GET request using middleware');
}).post(function(req, res){
    res.send('this is a POST request using middelware');
});
*/

/*
var hasName = function(req,res,next){
    if (req.param('name')){
        next();
    } else {
        res.send('What is your name?');
    }
    
};

var sayHello = function (req, res, next){
    res.send('Hello '+ req.param('name'));
}

app.get('/',hasName, sayHello);

app.listen(3000);
console.log('Server running at htt[://localhost:3000/');

*/
/*var express = require("express");
var app = express();

app.use('/',function(req,res){
    res.send('Hello World')
    
});

app.listen(3000);
console.log('Server running at htt[://localhost:3000/');
*/