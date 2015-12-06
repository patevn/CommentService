var express = require('express')
	mongoose = require('mongoose');

//instace of express
var app = express();
var db = mongoose.connect('mongodb://localhost/commentAPI'); //commapi is the name of the db we connecting to
var port = process.env.PORT || 8001;
var comment = require('./models/commentModel');  //the model


var commentRouter = express.Router();

commentRouter.route('/Comments')
.get(function(req,res){
	comment.find(function(err,comment){ //so when we goto /commments its going to do a comment.find and.
		if(err)
			res.status(500).send(err);// if erro send a 500 with a msg that contins the error
		else
			res.json(comment); // and pass that back in the response
	});
}); 


//main router
app.use('/api', commentRouter);


// '/' is the root, and the function after is the callback funtion, so anytime get . is called they will be called
app.get('/', function(req, res){
	res.send('Welcome to the comment service root');
});

//start express listening on the port
app.listen(port, function(){
	console.log('Running on port ' + port);
});