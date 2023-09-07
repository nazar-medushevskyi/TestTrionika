const gulp = require('gulp');
const server = require('browser-sync');
const less = require('gulp-less');

const destPath = 'dist';

const config = {
  src: {
    root: 'src',
    css: 'src/css',
    less: 'src/less',
    js: 'src/scripts',
    jsEntry: 'src/scripts/index.js',
    img: 'src/images',
    fonts: 'src/fonts',
  },
  dest: {
    root: destPath,
    css: `${destPath}/css`,
    js: `${destPath}/js`,
    img: `${destPath}/images`,
    fonts: `${destPath}/fonts`,
  },
  entry: 'index.html',
};

gulp.task('server', () => {
  server.init({
    server: {
      baseDir: config.src.root,
    },
    notify: true,
  });
});

gulp.task('less', () => {
  return gulp.src(`${config.src.less}/**/*.less`).pipe(less()).pipe(gulp.dest(config.src.css));
});

gulp.task('less:watch', () => {
  gulp.watch(`${config.src.less}/**/*.less`, gulp.series('less', server.reload));
});

gulp.task('copy', () => {
  gulp.src(`${config.src.root}/index.html`).pipe(gulp.dest(config.dest.root));
  gulp.src(`${config.src.css}/*.css`).pipe(gulp.dest(config.dest.css));
  gulp.src(`${config.src.js}/*.js`).pipe(gulp.dest(config.dest.js));
});

exports.build = gulp.series('copy');
exports.default = gulp.series('less', gulp.parallel('server', 'less:watch'));
