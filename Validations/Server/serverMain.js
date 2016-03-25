var path = require('path');
var express = require('express');
var app = express();
var favicon = require('serve-favicon');
var logger = require('morgan');
var exec = require('child_process').exec;
var child, seleniumServerPath;

var dbConnection = require(path.join(__dirname,'services','dbConnection'));

//Connect to Mongo
dbConnection.connect('crm');

app.use(logger('dev'));
app.use(express.static(path.join(__dirname,'..','Client')));

var customerRoutes = require(path.join(__dirname,'routes','customerRoutes'));


app.use('/customers',customerRoutes);

app.listen(3000,function(){
	console.log("listening on 3000 \n");
});
