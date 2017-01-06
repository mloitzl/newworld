var gulp = require('gulp');
var ts = require('gulp-typescript');
var merge = require('merge2');
var sourcemaps = require('gulp-sourcemaps');

var tsProject = ts.createProject({
	declaration: true,
	outFile: 'app.js'
});

gulp.task('default', function() {
	console.log("Hi :-)");
});

gulp.task('scripts', function () {
	// debugger;
	var tsResult = gulp.src('lib/**/*.ts')
		.pipe(sourcemaps.init())
		.pipe(tsProject())
		
	return merge([
		tsResult.dts.pipe(gulp.dest('release/definitions')),
		tsResult.js.pipe(gulp.dest('release/js')),
		tsResult.js.pipe(sourcemaps.write())
	])
});

gulp.task('watch', ['scripts'], function () {
	gulp.watch('lib/**/*.ts', ['scripts']);
});