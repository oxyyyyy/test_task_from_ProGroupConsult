var gulp = require('gulp'),
  sass = require('gulp-sass'),
  browserSync = require('browser-sync').create(),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglifyjs'),
  cssnano = require('gulp-cssnano'),
  rename = require('gulp-rename'),
  concatCss = require('gulp-concat-css'),
  imagemin = require('gulp-imagemin'),
  del = require('del');

// NOTE: Musthave!
// npm i gulp gulp-sass browser-sync gulp-concat gulp-uglifyjs gulp-cssnano gulp-rename gulp-concat-css gulp-imagemin del --save-dev
// npm i jquery bootstrap@4.0.0-alpha.6 tether wow.js waypoints nprogress --save

// Tasks! ----------------------------------------------------------------------------------------------------
gulp.task('browser-sync', function() {
  browserSync.init({
    // NOTE: if a localhost - use "proxy"
    // NOTE: if not - use "base dir"
    server: {
      baseDir: 'src'
    }
  });
});

gulp.task('sass', function() {
  return gulp.src('src/sass/**/*.sass')
    .pipe(sass())
    .pipe(gulp.dest('src/css'));
});

gulp.task('scripts', function() {
  return gulp.src([
      'bower_components/jquery/dist/jquery.js',
      'bower_components/tether/dist/js/tether.js',
      'bower_components/bootstrap/dist/js/bootstrap.js'
    ])
    .pipe(concat('libs.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('src/js'));
});

gulp.task('concatCssTaskLibs', function() {
  return gulp.src([
      'bower_components/bootstrap/dist/css/bootstrap.css'
    ])
    .pipe(concatCss('bundle.libs.css'))
    .pipe(gulp.dest('src/css'));
});

gulp.task('minCss', ['sass'], function() {
  return gulp.src(['src/css/main.css'])
    .pipe(cssnano())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('src/css'))
    .pipe(browserSync.stream());
});

gulp.task('minCssLibs', ['concatCssTaskLibs'], function() {
  return gulp.src(['src/css/bundle.libs.css'])
    .pipe(cssnano())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('src/css'));
});

gulp.task('clean', function() {
  return del.sync('assets/dist/**/*');
});

gulp.task('imgOpti', function() {
  return gulp.src('src/img/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('assets/dist/img'))
});
// -----------------------------------------------------------------------------------------------------------

// Watch! ----------------------------------------------------------------------------------------------------
gulp.task('watch', ['browser-sync', 'minCss', 'minCssLibs', 'scripts'], function() {
  gulp.watch('src/sass/**/*.sass', ['minCss']);
  gulp.watch('src/*.html', browserSync.reload);
  gulp.watch('src/js/**/*.js', browserSync.reload);
});
// -----------------------------------------------------------------------------------------------------------

// Bulid! ----------------------------------------------------------------------------------------------------
gulp.task('build', ['clean', 'scripts', 'minCss', 'minCssLibs'], function() {

  var buildCss = gulp.src([
      'src/css/main.min.css',
      'src/css/bundle.libs.min.css'
    ])
    .pipe(gulp.dest('assets/dist/css'));

  var buildJs = gulp.src([
      'src/js/libs.min.js',
      'src/js/common.js',
      'src/js/particlesjs-config.json'
    ])
    .pipe(gulp.dest('assets/dist/js'));

  var buildFonts = gulp.src([
      'src/fonts/**/*.*'
    ])
    .pipe(gulp.dest('assets/dist/fonts'));

  var buildImg = gulp.src('src/img/**/*')
    .pipe(imagemin([
      imagemin.gifsicle({
        interlaced: true
      }),
      imagemin.jpegtran({
        progressive: true
      }),
      imagemin.optipng({
        optimizationLevel: 6
      }),
      imagemin.svgo({
        plugins: [{
          removeViewBox: true
        }]
      })
    ]))
    .pipe(gulp.dest('assets/dist/img'));

  var buildHtmlPhp = gulp.src([
      'src/*.html',
      'src/*.php'
    ])
    .pipe(gulp.dest('assets/dist/'));

});
// -----------------------------------------------------------------------------------------------------------
