var mongo = require('mongodb');
var mongoClient = mongo.MongoClient;
var mongoUrl = "mongodb://45.55.197.92:27017";
exports.connect = function (dbName){
	if(mongo.DB && mongo.DB[dbName]){ 
		return mongo.DB[dbName];
	 }
	mongoClient.connect(mongoUrl+'/'+dbName,function(err,db){
		if(err){
			console.log("Problem with mongo, help!");
			process.exit(1);
		}else{
			console.log("Yay, mongo!");
			mongo.DB = mongo.DB || {};
			mongo.DB[dbName]= db;
			
		}

	});
};
