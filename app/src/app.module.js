(function() {
  'use strict';

  angular
    .module('app', [
      // Angular modules.
      'ngRoute',
      'ngAnimate',
      'ui.bootstrap',

      // Third party modules.
      'firebase',
      'mwl.calendar',
      'angular-momentjs',

      // Custom modules.
      'app.auth',
      'app.core',
      'app.calendar'
    ])
    .config(configure)
    .run(runBlock);

  configure.$inject = ['$routeProvider', '$locationProvider'];

  function configure($routeProvider, $locationProvider) {

    //custom
    $routeProvider.when('/', {
      templateUrl: 'src/calendar/calendar.html'
    });

    //core
    //$locationProvider.html5Mode(true);
    $routeProvider.when('/notfound', {
      templateUrl: 'src/core/notfound.html'
    });

    $routeProvider.otherwise({
      redirectTo: '/notfound'
    });
  }

  runBlock.$inject = ['$rootScope', '$location'];

  function runBlock($rootScope, $location ) {

    $rootScope.$on('$routeChangeError', function(event, next, previous, error) {
      if (error === "AUTH_REQUIRED") { console.error("app.runBlock# AUTH_REQUIRED");
        $location.path('/');
      }
    });


  }

})();
