var By = require('selenium-webdriver').By,
    until = require('selenium-webdriver').until,
    firefox = require('selenium-webdriver/firefox');

module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    // Karma plugins loaded
    plugins: [
      require('karma-jasmine'),
      require('karma-coverage'),
      require('karma-remap-istanbul'),
      require('karma-chrome-launcher'),
      require('karma-phantomjs-launcher'),
      require('karma-selenium-webdriver'),
      require('karma-android-launcher'),
      require('karma-selenium-webdriver-launcher')
    ],
    files: [
      // Polyfills.
      'node_modules/es6-shim/es6-shim.js',
      'node_modules/reflect-metadata/Reflect.js',
      // System.js for module loading
      'node_modules/systemjs/dist/system-polyfills.js',
      'node_modules/systemjs/dist/system.src.js',
      // Zone.js dependencies
      'node_modules/zone.js/dist/zone.js',
      'node_modules/zone.js/dist/jasmine-patch.js',
      'node_modules/zone.js/dist/async-test.js',
      'node_modules/zone.js/dist/fake-async-test.js',
      // RxJs.
      { pattern: 'node_modules/rxjs/**/*.js', included: false, watched: false },
      { pattern: 'node_modules/rxjs/**/*.js.map', included: false, watched: false },
      // karma shim file
      { pattern: 'karma-test-shim.js', included: true, watched: true },
      // paths loaded via module imports
      // Angular itself
      { pattern: 'node_modules/@angular/**/*.js', included: false, watched: true },
      { pattern: 'node_modules/@angular/**/*.js.map', included: false, watched: true },
      // Our built application code
      { pattern: 'dist/**/*.js', included: false, watched: true },
      // paths loaded via Angular's component compiler
      // (these paths need to be rewritten, see proxies section)
      { pattern: 'dist/**/*.html', included: false, watched: true },
      { pattern: 'dist/**/*.css', included: false, watched: true },
      // paths to support debugging with source maps in dev tools
      { pattern: 'src/**/*.ts', included: false, watched: false },
      { pattern: 'dist/**/*.js.map', included: false, watched: false }
    ],
    exclude: [
      // Vendor packages might include spec files. We don't want to use those.
      'dist/lib/**/*.spec.js'
    ],
    // proxied base paths
    proxies: {
      // required for component assests fetched by Angular's compiler
      "/app/": "/base/dist/app/"
    },
    // Coverage reporter generates the coverage
    reporters: ['progress', 'dots', 'coverage'],
    // reporters: ['progress', 'dots', 'coverage', 'karma-remap-istanbul'],
    // Source files that you wanna generate coverage for.
    // Do not include tests or libraries (these files will be instrumented by Istanbul)
    preprocessors: {
      'dist/!(lib)/**/!(*.spec).js': ['coverage']
    },
    customLaunchers: {
      swd_firefox: {
        base: 'SeleniumWebdriver',
        browserName: 'Firefox',
        getDriver: function(){
          var driver = new firefox.Driver();
          return driver;
        }
      },
    },
    coverageReporter: {
      reporters:[
        {
          type: 'json',
          subdir: '.',
          file: 'coverage-final.json'
        }
      ]
    },
    // remapIstanbulReporter: {
    //   src: 'coverage/coverage-final.json',
    //   reports: {
    //     html: 'coverage'
    //   },
    //   timeoutNotCreated: 1000,
    //   timeoutNoMoreFiles: 1000
    // },
    port: 9876,
    colors: true,
    logLevel: config.LOG_WARN,
    autoWatch: true,
    browsers: [
      'Chrome',
      // 'PhantomJS',
      // 'ChromeCanary',
      // 'swd_firefox'
    ],
    singleRun: true
  });
};
