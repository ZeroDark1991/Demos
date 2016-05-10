var gulp = require('gulp');
var webpack = require('gulp-webpack');
var named = require('vinyl-named');
var appList = ['app'];

// gulp.task('default', function() {
//   return gulp.src(['src/app.js', 'test/test.js'])
//     .pipe(named())
//     .pipe(webpack())
//     .pipe(gulp.dest('dist/'));
// });

gulp.task('bundle', function() {
  return gulp.src(_mapFiles(appList,'js'))
    .pipe(named())
    .pipe(webpack(getConfig()))
    .pipe(gulp.dest('dist/'));
});

gulp.task('watch', function() {
  return gulp.src(_mapFiles(appList,'js'))
    .pipe(named())
    .pipe(webpack(getConfig({watch:true})))
    .pipe(gulp.dest('dist/'));
});

/**
 * @private
 */

// 把要打包的文件列表从 gulp.src(...) 中抽出来
function _mapFiles(list, extname) {
  return list.map(function (app) {return 'src/' + app + '.' + extname});
}

//抽出webpack配置，方便分离bundle和watch
function getConfig(opt) {
  var config = {
    module: {
      loaders: [
        { test: /\.vue$/, loader: 'vue'}
      ]
    },
    devtool: 'source-map'
    //调试时能追踪到源代码
  }
  if (!opt) {
    return config
  }
  for (var i in opt) {
    config[i] = opt[i]
  }
  return config
}