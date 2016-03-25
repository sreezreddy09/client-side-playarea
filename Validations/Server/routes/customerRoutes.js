var express = require('express');

var router = express.Router();
var path = require('path');

var customerService = require(path.join(__dirname,'..','services','customerService'));

var bodyParser = require('body-parser');
var parseUrlencoded = bodyParser.urlencoded({extended: false});

router.route('/').get(function(request,response){
	customerService.getCustomers(function(err,data){
		if(err){
			response.send(500).json('Error retrieving data');
			return;
		}
		response.send(data);
	});

}).post(parseUrlencoded,function(request,response){
	var customer = request.body;
	customerService.saveCustomer(customer,function(err,result){
		if(err){
			response.send(500).json('Error saving data');
			return;
		}
		response.json('Data Saved Successfully');
	});

});


module.exports = router;