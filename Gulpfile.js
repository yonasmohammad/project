const gulp = require('gulp');
const sass = require('gulp-sass');
const bourbon = require("bourbon").includePaths;
const nunjucks = require('gulp-nunjucks');

gulp.task('nunjucks',  function () {
    gulp.src('src/templates/*.html')
        .pipe(nunjucks.compile())
        .pipe(gulp.dest('app/views'))
});
gulp.task('js', function() {
    return gulp.src([
        'node_modules/bootstrap/dist/js/bootstrap.min.js',
        'node_modules/bootstrap/node_modules/jquery/dist/jquery.min.js',
        'node_modules/bootstrap/node_modules/tether/dist/js/tether.js',
        'src/templates/js/paralex.js',
        'src/templates/js/action.js'
      ])
      .pipe( gulp.dest('app/assets/js'));
  });
 
gulp.task('sass', function() {
    return gulp.src([
        'src/scss/app.scss',
        'node_modules/bootstrap/font.css',
        'node_modules/bootstrap/dist/css/bootstrap.min.css'
      ])
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('app/assets/css'));
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

gulp.task('gulp:watch', function () {
  gulp.watch(['src/scss/*.scss', 'src/scss/**/*.scss'], ['sass']);
  gulp.watch(['src/templates/*.html', 'src/templates/**/*.html'], ['nunjucks']);
});


gulp.task('default', ['nunjucks','sass','js'])
