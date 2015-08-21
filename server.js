var express = require('express');
var app = express();
var mongojs = require('mongojs');
var bodyParser = require('body-parser');
// mongojs(database, [collection])
var db = mongojs('freshCars', ['meanCars']);




app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());


// Returns a JSON object containing all the cars of the specified year
app.post('/cars', function(req, res) {
	// Convert posted year to integer
	var year = parseInt(req.body.year, 10);
	// Get JSON object with cars from specified years
	db.meanCars.find({"year":year}, function(err, docs){
		console.log(docs);
		res.json(docs);
	});
});

// Returns JSON object containing information for the car chosen by the user
app.post('/selectCar', function(req,res){
	console.log("I've recieved a request to fetch car information");

	var year = parseInt(req.body.year, 10);
	var make = req.body.make;
	var model = req.body.model;
	var vehicleClass = req.body.vehicle_class;
	console.log(year + ' ' + make + ' ' + model + ' ' + vehicleClass);

	db.meanCars.find({"year":year, "make":make, "model":model, "vehicle_class":vehicleClass}, function(err, docs){
		console.log(docs);
		res.json(docs);
	});
});


// Use port 3000
app.listen(3000);
console.log("Sever running on port 3000");