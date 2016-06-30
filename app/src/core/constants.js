(function() {
  'use strict';

  angular
    .module('app.core')
    .constant('FIREBASE_URL', 'https://haicku-starter-app.firebaseio.com/')
    .constant('PROTECTED_PATHS', ['/waitlist']);

})();
