// Include gulp.

/*
var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var config = require('./config.json');
var bundle = require('gulp-react-bundle');

// Include plugins.

var imagemin = require('gulp-imagemin');
var pngcrush = require('imagemin-pngcrush');

var plumber = require('gulp-plumber');
var notify = require('gulp-notify');
var autoprefix = require('gulp-autoprefixer');


var concat = require('gulp-concat');
var rename = require('gulp-rename');
var sourcemaps = require('gulp-sourcemaps');*/

var sass = require('gulp-sass');
var argv = require('yargs').argv;
var gulpif = require('gulp-if');
var gulp = require('gulp');
var browserify = require('browserify');         //
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var uglify = require('gulp-uglify');
var buffer = require('vinyl-buffer');
var glob = require('gulp-sass-glob');
var shell = require('gulp-shell');

// CSS.
gulp.task('css', function() {
  return gulp.src(config.css.src)
    .pipe(glob())
    .pipe(plumber({
      errorHandler: function (error) {
        notify.onError({
          title:    "Gulp",
          subtitle: "Failure!",
          message:  "Error: <%= error.message %>",
          sound:    "Beep"
        }) (error);
        this.emit('end');
      }}))
    .pipe(sourcemaps.init())
    .pipe(sass({
      style: 'compressed',
      errLogToConsole: true,
      includePaths: config.css.includePaths
    }))
    .pipe(autoprefix('last 2 versions', '> 1%', 'ie 9', 'ie 10'))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(config.css.dest))
    .pipe(browserSync.reload({ stream: true, match: '**/*.css' }));
});
/*
// Compress images.
gulp.task('images', function () {
  return gulp.src(config.images.src)
    .pipe(imagemin({
      progressive: true,
      svgoPlugins: [{ removeViewBox: false }],
      use: [pngcrush()]
    }))
    .pipe(gulp.dest(config.images.dest));
});

// Fonts.
gulp.task('fonts', function() {
  return gulp.src(config.fonts.src)
    .pipe(gulp.dest(config.fonts.dest));
});*/

// Watch task.
gulp.task('watch', function() {
  gulp.watch(config.css.src, ['css']);
  //gulp.watch(config.images.src, ['images']);
});

/*
// Static Server + Watch
gulp.task('serve', ['css', 'fonts', 'watch'], function() {
  browserSync.init({
    proxy: config.proxy
  });
});*/

// Run drush to clear the theme registry.
gulp.task('drush', shell.task([
  'drush cache-clear theme-registry'
]));

/*gulp.task('build', function() {
    bundle('./modules/custom/asu_superhero/js/asu_superhero.form_init.js', './modules/custom/asu_superhero/js/asu_superhero.built.js');
});*/

gulp.task('build', function () {
    var browserifyOptions = {
        entries: './modules/custom/asu_superhero/js/react_form/asuSuperheroFormInit.jsx',
        debug: !argv.production,  // add resource map at the end of the file or not
        extensions: ['.jsx', '.js'],
    };

    return browserify(browserifyOptions)
        .transform(babelify.configure({
            presets: [['es2015', { sourcetype: "script" }], ['react']]
        }))
        .bundle()
        .pipe(source("asu_superhero.form.js"))
        .pipe(gulpif(argv.production, buffer()))    // Stream files
        .pipe(gulpif(argv.production, uglify()))
        .pipe(gulp.dest('./modules/custom/asu_superhero/js/'));
});

gulp.task('default', ['build']);


// Default Task
gulp.task('default', ['serve']);