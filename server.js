var express = require('express');
var app = express();
var mongojs = require('mongojs');

// mongojs(database, [collection])
var db = mongojs('freshCars', ['testMean']);




app.use(express.static(__dirname + "/public"));

app.get('/cars', function(req, res){
	console.log("I recieved a GET request");

	db.testMean.find(function(err, docs){
		console.log(docs);
		res.json(docs);
	});


});


// Use port 3000
app.listen(3000);
console.log("Sever running on port 3000");