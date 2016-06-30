(function() {
  'use strict';

  angular
    .module('app.calendar')
    .factory('calendarService', calendarService);

  calendarService.$inject = ['$firebaseAuth', 'firebaseDataService'];

  function calendarService($firebaseAuth, firebaseDataService) {
    var firebaseAuthObject = $firebaseAuth(firebaseDataService.root);

    var service = {
    };

    return service;

    ////////////

    

  }

})();
