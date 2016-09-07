/*
var gulp        = require('gulp');
var browserify  = require('browserify');
var babelify    = require('babelify');
var reactify    = require('reactify');
var source      = require('vinyl-source-stream');
var buffer      = require('vinyl-buffer');
var uglify      = require('gulp-uglify');
var sourcemaps  = require('gulp-sourcemaps');
var livereload  = require('gulp-livereload');

gulp.task('build', function () {
    // app.js is your main JS file with all your module inclusions
    return browserify({entries: 'js/app.js', debug: true})
        .transform("babelify", { presets: ["es2015"] })
        .bundle()
        .pipe(source('app.js'))
        .pipe(buffer())
        //.pipe(sourcemaps.init())
        //.pipe(uglify())
        //.pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('dist/js'))
        //.pipe(livereload());
});

gulp.task('watch', ['build'], function () {
    livereload.listen();
    gulp.watch('js/!*.js', ['build']);
});

gulp.task('default', ['watch']);*/

var gulp = require("gulp");
var browserify = require("browserify");
var babelify = require("babelify");
var reactify = require("gulp-reactify");
var source = require("vinyl-source-stream");

gulp.task('jsx', function(){
    return browserify('./js/app.js')
        .transform(babelify)
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('js'));
});