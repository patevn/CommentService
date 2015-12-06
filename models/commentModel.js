var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var commentModel = new Schema({
	title: {type: String},
	author: {type: String},
	comment: {type: String},
	read: {type: Boolean, default:false}
});


//this loads the model into mongoose, comment being the schema
module.exports=mongoose.model('comment', commentModel);