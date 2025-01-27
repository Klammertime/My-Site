"use strict";
var gulp = require('gulp'),
    del = require('del'),
    pages = require('gulp-gh-pages');

var options = {
    dist: './dist/'
};

// Create clean task.
gulp.task('clean', function() {
    del(['dist']);
});

gulp.task("build", function() {
    return gulp.src([
            "index.html",
            "marketing.html",
            "PR.html",
            "scrambler.html",
            "portfolio.html",
            "about.html",
            "assets/bootstrap/*/*",
            "assets/css/*",
            "assets/js/*",
            "assets/img/*/*",
            "assets/img/*",
            "assets/fonts/*",
            "assets/pdf/*"
        ], {
            base: './'
        })
        .pipe(gulp.dest('dist'));
});

gulp.task('deploy', function() {
    return gulp.src(options.dist + '**/**/*')
        .pipe(pages());
})

// Build task is a dependency of default task so can run command "gulp".
gulp.task('default', ['clean'], function() {
    gulp.start('build')
});