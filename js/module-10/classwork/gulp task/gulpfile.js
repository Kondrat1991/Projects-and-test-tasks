const gulp = require('gulp');
const rigger = require('gulp-rigger');
const runSequence = require('run-sequence');
const cssnano = require('gulp-cssnano');
const autoprefixer = require('gulp-autoprefixer');
const sass = require('gulp-sass');
const imagemin = require('gulp-imagemin');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const plumber = require('gulp-plumber');
const del = require('del');
const browserSync = require('browser-sync').create();

gulp.task('del', () => del('./build'));


gulp.task('html', function () {
    gulp.src('./src/index.html')
        .pipe(rigger())
        .pipe(gulp.dest('build/'))
        .pipe(browserSync.stream())
});

gulp.task('css', function() {
    return gulp.src('./src/scss/style.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))

        .pipe(cssnano())
        .pipe(gulp.dest('./build/css/'))
        .pipe(browserSync.stream())

});

gulp.task('img', () =>
    gulp.src('src/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('build/images/'))
        .pipe(browserSync.stream())
);

gulp.task('fonts', () =>
    gulp.src('src/fonts/*')
        .pipe(gulp.dest('build/fonts/'))
);

gulp.task('js', function () {
    gulp.src('./src/js/*.js')
        .pipe(plumber())
        .pipe(babel({
            presets: ['env']
        }))
        .pipe(concat('index.js'))
        .pipe(uglify())
        .pipe(gulp.dest('build/js/'))
        .pipe(browserSync.stream());
});


gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./build"
        }
    })
});


// gulp.task('js-watch', ['html'], function (done) {
//     browserSync.reload();
//     done();
// });

gulp.task('watch', function () {
    gulp.watch("src/html/*.html", ['html']);
    gulp.watch("src/js/*.js", ['js']);
    gulp.watch("src/images/*", ['img']);
    gulp.watch("src/scss/*.scss", ['css']);
});

gulp.task('build', function(callback) {
    runSequence('del', 'html', 'css', 'img', 'fonts', 'js', 'browser-sync', 'watch', callback);
});


// 1. npm init
// 2.Структура папок документа
// 3. Установка Плагінів
// 4.


// var path = {
//     src : {
//         html: 'src/*.html',
//         sass: 'src/scss/**/*.scss',
//         js: 'src/js/**/*.js',
//         img: 'src/img/**/*.+(png|jpg|gif|svg)',
//         fonts: 'src/fonts/**/*.*',
//         plugins: 'src/plugins/**/*.*'
//     },
//     dist: {
//         html: 'dist/',
//         css: 'dist/css/',
//         js: 'dist/js/',
//         img: 'dist/img/',
//         fonts: 'dist/fonts/',
//         plugins: 'dist/plugins/'
//     },
//     watch: {
//         html: 'src/**/*.html'
//     },
//     clean: './dist'
// };




