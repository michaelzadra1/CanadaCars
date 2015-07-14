var express = require('express');
var app = express();


app.get('/', function(req, res) {
	// Send message on response
	res.send("Hello world!");
});

// Use port 3000
app.listen(3000);
console.log("Sever running on port 3000");