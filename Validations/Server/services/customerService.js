var mongo = require('mongodb');
var ObjectId = mongo.ObjectID;

module.exports = {
		getCustomers : getCustomers,
		saveCustomer : saveCustomer
    
};

	
	

function getCustomers(cb){
  	mongo.DB['crm'].collection('customers').find().toArray(function(err,customers){
  		 if(err){
  		 	console.log('Problem with fetching customers! help'); 
  		 	cb(err);
  		   return;
  		}
		cb(err,customers);
	});
  }

  function saveCustomer(data,cb){

 
  	mongo.DB['crm'].collection('customers').insertOne(data,function(err,result){
  		if(err){
        console.log('Problem with saving company! help');
  			cb(err);
  			return;
  		}
  		cb(err,result);
  	});
  }

 


