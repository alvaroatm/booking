(function() {
  'use strict';

  angular
    .module('app.auth')
    .config(configFunction)
    .run(runFunction);

  configFunction.$inject = ['$routeProvider'];

  function configFunction($routeProvider) {
    $routeProvider.when('/register', {
      templateUrl: 'app/src/auth/register.html',
      controller: 'AuthController',
      controllerAs: 'vm'
    });
    $routeProvider.when('/login', {
      templateUrl: 'app/src/auth/login.html',
      controller: 'AuthController',
      controllerAs: 'vm'
    });
  }

  runFunction.$inject = ['$location', 'authService', 'firebaseDataService', 'PROTECTED_PATHS'];

  function runFunction($location, authService, firebaseDataService, PROTECTED_PATHS) {

    firebaseDataService.root.onAuth(function(authData) {
      if (!authData && pathIsProtected($location.path())) {
        authService.logout();
        $location.path('/login');
      };
    });

    function pathIsProtected(path) {
      return PROTECTED_PATHS.indexOf(path) !== -1;
    }
  }

})();
