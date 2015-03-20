
/**
 * Created by Fabien on 06/03/2015.
 */
var application_root = __dirname,
    express = require("express"),
    path = require("path"),
    bodyparser = require("body-parser");
var app = express();
var colletions = ["things"];
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/livRepas');
var db = mongoose.connection;

app.use(bodyparser);
app.use(app.router);
app.use(express.static(path.join(application_root, "public")));
app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
/*
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function (callback){

});*/


app.get('/', function (req, res){
    res.send("totototot test");
});

app.get('/seeUser',function(req,res){
    res.header("Access-Control-Allow-Origin", "http://localhost");
    res.header("Access-Control-Allow-Methods", "GET, POST");


});

app.post('/saveUser', function(req,res){
   console.log("it's a post !");
   res.header("Access-Control-Allow-Origin", "http://localhost");
   res.header("Access-Control-Allow-Methods", "GET, POST");




});

app.post('/validePayemant', function(req,res){
    //Traitrmetn
});

app.listen(8080);