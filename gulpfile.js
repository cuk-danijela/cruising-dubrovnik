const gulp = require('gulp');
const cleancss = require('gulp-clean-css');
const rename = require('gulp-rename');
const autoprefixer = require('gulp-autoprefixer');
const uncss = require('gulp-uncss');

// Remove unused CSS
gulp.task('uncss', async function () {
    gulp.src('assets/css/style.css')
        .pipe(uncss({
            html: ['index.html', '/*.html']
        }))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('dist/css'));
});

// Prefixer CSS
gulp.task('autoprefixer', async function () {
    gulp.src('assets/css/*.css')
        .pipe(autoprefixer({
            cascade: false
        }))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('dist/css'));
});

// Minify CSS
gulp.task('cleancss', async function () {
    gulp.src('assets/css/*.css')
        .pipe(cleancss())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('dist/css'));
});




