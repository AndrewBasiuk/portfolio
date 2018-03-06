
var gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync'),
    useref = require('gulp-useref'),
    cleanCSS = require('gulp-clean-css'),
    imagemin = require('gulp-imagemin'),
    autoprefixer = require('gulp-autoprefixer'),
    uglify = require('gulp-uglify');


// SASS
gulp.task('sass', function(){
  return gulp.src('app/sass/main.scss')
    .pipe(sass())
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.reload({
        stream: true
      }))
});
// SASS


// browserSynk
gulp.task('browserSync', function(){
  browserSync({
    server: {
      baseDir: 'app'
    }
  })
});
// browserSynk


// CSS
gulp.task('css', function() {
  return gulp.src('app/css/main.css')
    .pipe(autoprefixer({
            browsers: ['last 10 versions'],
            cascade: true
        }))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('dist/css'));
});
// CSS


// JS
gulp.task('js', function () {
  return gulp.src('app/js/main.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'))
});
// JS


// image
gulp.task('image', function(){ 
    gulp.src('app/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/img'))
});
// image


gulp.task('watch',['browserSync', 'sass', 'css', 'js'], function(){
  gulp.watch('app/sass/**/*.scss', ['sass']);
  gulp.watch('app/css/main.css', ['css']);
  gulp.watch('app/js/main.js', ['js']);
  gulp.watch('app/*.html', browserSync.reload);
  gulp.watch('app/js/*.js', browserSync.reload);
});