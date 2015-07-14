var express = require('express');
var app = express();


app.use(express.static(__dirname + "/public"));


// Use port 3000
app.listen(3000);
console.log("Sever running on port 3000");