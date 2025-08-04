const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');

const paths = {
  scss: {
    src: 'src/scss/**/*.scss',
    dest: 'dist/css/'
  }
};

function styles() {
  return gulp.src(paths.scss.src)
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(paths.scss.dest));
}

function watchFiles() {
  gulp.watch(paths.scss.src, styles);
}

exports.styles = styles;
exports.watch = gulp.series(styles, watchFiles);
