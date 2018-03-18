const gulp = require('gulp');
const sass = require('gulp-sass');
const pug = require('gulp-pug');


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