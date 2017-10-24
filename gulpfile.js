const gulp = require("gulp");
const sass = require("gulp-ruby-sass");
const sourcemaps = require('gulp-sourcemaps');
const tiny = require('gulp-tinypng-nokey');
const uglify = require('gulp-uglify');
// 压缩js插件
const pump = require('pump');
// 压缩css插件
const cleanCSS = require('gulp-clean-css');
// 压缩html插件
const htmlmin = require('gulp-htmlmin');
// 编译模板插件
const tmodjs = require("gulp-tmod");
// 清空文件夹插件
const clean = require("gulp-clean");
// html代码中使用模板插件
const fileinclude = require('gulp-file-include');
// js代码检查插件
const jshint = require('gulp-jshint');
// 压缩包
const zip = require('gulp-zip');
const livereload = require('gulp-livereload');
var projectName = "terror";
var description = "godway"
var date = new Date(),
    year = date.getFullYear(),
    month = date.getMonth() + 1,
    day = date.getDate();

month = month > 9 ? month : '0' + month;
day = day > 9 ? day : '0' + day;
gulp.task('zip', () => {

    gulp.src('dist/*')
        .pipe(zip(projectName + '_' + description + year + month + day + '.zip'))
        .pipe(gulp.dest(''))
});
// 清空文件
gulp.task('clean', function() {
    return gulp.src('dist/', { read: false })
        .pipe(clean());
});
// sass编译成css
gulp.task("css", () => {
    sass("src/scss/**/*.scss")
        .on('error', sass.logError)
        .pipe(sourcemaps.write())
        .pipe(sourcemaps.write('maps', {
            includeContent: false,
            sourceRoot: 'source'
        }))
        // 压缩css
        .pipe(cleanCSS({ compatibility: 'ie8' }))
        .pipe(gulp.dest("dist/assets/css/"))
        .pipe(livereload());
});
// 压缩图片
gulp.task("image", () => {
    gulp.src('src/images/**/*.{png,jpg,jpeg}')
        .pipe(tiny())
        .pipe(gulp.dest('dist/assets/images'))
        .pipe(livereload());;
});
// 压缩js
gulp.task('compressJs', (cb) => {
    pump([
            gulp.src('src/js/**/*.js').pipe(jshint()),
            uglify(),
            gulp.dest('dist/assets/js')

        ],
        cb
    );
});
// 压缩html
gulp.task('compressHtml', () => {
    gulp.src('src/view/**/*.html')
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('dist/html'))
        .pipe(livereload());;
});
gulp.task('tpl', function() {
    gulp.src('src/tpl/*.tpl')
        .pipe(gulp.dest('dist/assets/template'))
        .pipe(tmodjs({
            templateBase: 'src/tpl',
            type: "AMD",
            output: "dist/assets/template"
        }))
        .pipe(gulp.dest('dist/assets/template'))
        .pipe(livereload());

});
gulp.task('copy', () => {

    gulp.src('lib/*')
        .pipe(gulp.dest('dist/lib'))
        .pipe(livereload());;
})
gulp.task('dev', ['css', 'compressHtml', 'image', 'compressJs', 'tpl', 'copy', 'watch'], function() {
    console.log('..............')
})

gulp.task('watch', function() {
    livereload.listen();
    gulp.watch('src/tpl/*.tpl', ['tpl']);
    gulp.watch('src/js/**/*.js', ['compressJs']);
    gulp.watch('src/images/**/*.{png,jpg,jpeg}', ['image']);
    gulp.watch('lib/*', ['copy']);
    gulp.watch('src/scss/**/*.scss', ['css']);
    gulp.watch('src/view/**/*.html', ['compressHtml']);
})
