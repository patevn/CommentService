var express = require('express')
	mongoose = require('mongoose');

//instace of express
var app = express();
var db = mongoose.connect('mongodb://localhost/commentAPI');
var port = process.env.PORT || 8001;
var comment = require('./models/commentModel');


var commentRouter = express.Router();

commentRouter.route('/Comments')
.get(function(req,res){
	comment.find(function(err,comment){
		if(err)
			console.log(err)
		else
			res.json(comment);
	});
}); 


//main router
app.use('/api', commentRouter);


// '/' is the root, and the function after is the callback funtion, so anytime get . is called they will be called
app.get('/', function(req, res){
	res.send('Welcome to the comment service');
});

//start express listening on the port
app.listen(port, function(){
	console.log('Running on poort ' + port);
});