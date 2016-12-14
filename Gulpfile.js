const gulp = require('gulp');
const sass = require('gulp-sass');
const nunjucks = require('gulp-nunjucks');
const bourbon = require("bourbon").includePaths;

gulp.task('sass', function () {
  return gulp.src('src/scss/app.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('app/assets/css'));
});

gulp.task('default',  function () {
    gulp.src('src/templates/home.html')
        .pipe(nunjucks.compile({name: 'Sindre'}))
        .pipe(gulp.dest('app'))
});



// setup our Sass compilation task
gulp.task('scss', function() {
    return gulp.src('src/scss/**/*.scss')
        .pipe(scss({
        errLogToConsole: true,
        includePaths: ['styles'].concat(bourbon)
    }))
        .pipe(gulp.dest('app/assets/css'));
});



gulp.task('sass:watch', function () {
  gulp.watch(['src/scss/*.scss', 'src/scss/**/*.scss'], ['sass']);
});

gulp.task('jucks:watch', function () {
  gulp.watch(['src/*.html', 'src/**/*.html'], ['jucks']);
});


gulp.task('default', ['sass'])
