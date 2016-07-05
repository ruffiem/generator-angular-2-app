var gutil = require('gulp-util');

/*
 * set prefix for relative paths
 */
var pre = './../';

/*
 * set environment paths relatively to gulp tasks folder
 */
exports.paths = {
  dist: pre + 'dist',
  lib: pre + 'dist/lib',
  src: pre + 'src',
  tmp: pre + '.tmp',
  bower: pre + 'bower_components'
};

/*
 * set essential libraries for angular2 to run (keep the order)
 */
exports.lib = [
  pre + 'node_modules/es6-shim/es6-shim.min.js',
  pre + 'node_modules/es6-shim/es6-shim.map',
  pre + 'node_modules/systemjs/dist/system-polyfills.js',
  pre + 'node_modules/systemjs/dist/system-polyfills.js.map',
  pre + 'node_modules/zone.js/dist/zone.js',
  pre + 'node_modules/reflect-metadata/Reflect.js',
  pre + 'node_modules/reflect-metadata/Reflect.js.map',
  pre + 'node_modules/systemjs/dist/system.src.js',
  pre + 'node_modules/ng2-bootstrap/bundles/ng2-bootstrap.min.js'
];

exports.dir = [
  pre + 'node_modules/@angular',
  pre + 'node_modules/rxjs',
  pre + 'node_modules/symbol-observable',
  pre + 'node_modules/marked'
];

/*
 * set ports for the node and the live reload servers
 */
exports.ports = {
  http: 5555,
  liveReload: 4002
};

exports.getEnv = function (env) {
  return env.seq.indexOf('dev') > 0 || env.seq.indexOf('dev:live') > 0 ? 'dev' : null;
};

/*
 * error output
 */
exports.errorHandler = function (title) {
  'use strict';

  return function(err) {
    gutil.log(gutil.colors.red('[' + title + ']'), err.toString());
    this.emit('end');
  };
};
