//create refrcne to gulp
var gulp = require('gulp'),
//create refrence to gulp-nodemon
 nodemon = require('gulp-nodemon');

 //gulp task to setiup nodemon. needs a json object to configure itself
 //script : is what it will load and ext are the files it will watch for
 gulp.task('default', function(){
nodemon({
	script : 'app.js',
	ext: 'js',
	env: {PORT:8000},
	ignore: ['./node_modules/**']
	})
	.on('restart', function(){console.log('Restarting server');
	});
});