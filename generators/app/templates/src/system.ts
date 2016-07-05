(function(global) {
  var  map = {
    'app':                        'app',
    '@angular':                   'lib/@angular',
    'rxjs':                       'lib/rxjs',
    'symbol-observable':          'lib/symbol-observable',
    'marked':                     'lib/marked'
 };

  //packages tells the System loader how to load when no filename and/or no extension
  var packages = {
    'app':                        { main: 'main.js',  defaultExtension: 'js' },
    'rxjs':                       { main: 'Rx.js', defaultExtension: 'js' },
    'symbol-observable':          { main: 'index.js', defaultExtension: 'js' },
    'marked':                     { main: 'index.js', defaultExtension: 'js' }
  };

  var ngPackageNames = [
    'common', 'compiler', 'core', 'http', 'platform-browser', 'platform-browser-dynamic', 'router', 'upgrade'
  ];

  ngPackageNames.forEach(function(pkgName) {
    map['@angular/'+pkgName] = 'lib/@angular/' + pkgName;
  });

  ngPackageNames.forEach(function(pkgName) {
    packages['@angular/'+pkgName] = { main: 'bundles/' + pkgName + '.umd.min.js', defaultExtension: 'js' };
  });

  var config = {
    map: map,
    packages: packages
  }

  System.config(config);

})(this);
