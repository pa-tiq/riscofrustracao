const gulp = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const debug = require('gulp-debug');
const rename = require('gulp-rename');

var dir = 'src/styles';
var scssImportFile = dir + '/import.scss';
var scssWatchFiles = dir + '/**/*.scss';
var buildFilename = 'build.css';
var buildPath = 'public';

function scssToCss() {

	var sassConfig = {
        outputStyle: 'expanded'
    };

	return gulp.src(scssImportFile)
    .pipe(debug({ title: 'css-debug' }))
    .pipe(concat('concat.scss'))
    .pipe(sass(sassConfig).on('error', sass.logError))
    .pipe(rename(buildFilename))
    .pipe(gulp.dest(buildPath));
}

/**
 * Monitora a alteração e realiza a publicação dos arquivos
 * @returns
 */
function watch() {
    gulp.watch(scssWatchFiles, scssToCss);
}

gulp.task('default', gulp.series(scssToCss));

gulp.task('watch', gulp.series('default', watch));