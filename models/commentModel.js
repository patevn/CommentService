var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var commentModel = new Schema({
	title: {type: String},
	author: {type: String},
	genre: {type: String},
	read: {type: Boolean, default:false}
});


//this loads the model into mongosse
module.exports=mongoose.model('comment', commentModel);