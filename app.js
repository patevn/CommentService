var express = require('express');


var app = express();

var port = process.env.PORT || 3000;

// '/' is the foot, and the function after is the callback funtion, so anytime get . is called they will be called
app.get('/', function(req, res){
	res.send('Welcome to the comment service');
});

//start express listening on the port
app.listen(port, function(){
	console.log('Running on poort ' + port);
});