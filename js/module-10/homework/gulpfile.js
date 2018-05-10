const gulp = require('gulp');
const sass = require('gulp-sass');



gulp.task('sass', function(){
    return gulp.src('app/scss/**/*.scss') // Берем все sass файлы из папки sass и дочерних, если таковые будут
        .pipe(sass())
        .pipe(gulp.dest('app/css'))
});


