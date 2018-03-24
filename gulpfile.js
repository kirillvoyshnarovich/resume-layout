const gulp = require('gulp');
const sass = require('gulp-sass');
const pug = require('gulp-pug');
const image = require('gulp-image');
const browserSync = require('browser-sync');


gulp.task('sass', function () {  /*для gulp модуля подключаем задачу под название 'sass' */
    return gulp.src('./src/styles/*.scss') /*указываем путь откудо взять файл scss,(мы берем его из папки src т. е исходног кода ) */
      .pipe(sass().on('error', sass.logError))/*Далее говорим через какую задачу провесть под названием sass(это по ходу то что мы задали константу const sass) */
      .pipe(gulp.dest('./build/styles')); /*здесь указываем в какую папку нам нужно отправить отредактированный файл*/
  });


  gulp.task('pug', function () {
    return gulp.src('./src/pages/*.pug')
    .pipe(pug({
        // Your options in here. 
      }))
      .pipe(gulp.dest('./build')); 
  });


  gulp.task('image', function () {
    gulp.src('./src/image/*')
      .pipe(image())
      .pipe(gulp.dest('./build/image'));
  });


  gulp.task('fonts', function () {
    return gulp.src('./src/fonts/**/*')
       .pipe(gulp.dest('./build/fonts'))
 });


 gulp.task('browserSync', function () {
  browserSync({
     server: {
        baseDir: './build/'
     },
  })
});


gulp.task('watch', ['sass', 'pug', 'image','fonts', 'browserSync'], function () {
  gulp.watch('./src/styles/*.scss', ['sass']);
  gulp.watch('./src/pages/*.pug', ['pug']);
  gulp.watch('./src/image/*', ['image']);
  gulp.watch('./src/fonts/**/*', ['fonts']);
  gulp.watch('build/*.html', browserSync.reload);
  gulp.watch("./build/css/**/*.css").on("change", browserSync.reload);
  gulp.watch('./build/js/**/*.js').on("change", browserSync.reload);
});


gulp.task('default', ['watch', 'fonts', 'image']);