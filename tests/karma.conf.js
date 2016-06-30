module.exports = function (config) {
  config.set({

    basePath: '../',

    files: [
      'https://ajax.googleapis.com/ajax/libs/angularjs/1.4.9/angular.min.js',
        'https://ajax.googleapis.com/ajax/libs/angularjs/1.4.9/angular-route.min.js',
        'https://ajax.googleapis.com/ajax/libs/angularjs/1.4.9/angular-mocks.js',

      'https://cdn.firebase.com/js/client/2.2.4/firebase.js',
      'https://cdn.firebase.com/libs/angularfire/1.1.3/angularfire.min.js',

      'app/src/core/core.module.js',
        'app/src/core/constants.js',

      'app/src/auth/auth.module.js',
        'app/src/auth/auth.config.js',
        'app/src/auth/auth.controller.js',
        'app/src/auth/auth.service.js',

      'app/src/messages/messages.module.js',
        'app/src/messages/messages.config.js',
        'app/src/messages/messages.controller.js',

      'app/src/app.module.js',

      'tests/unit/**/*.js'
    ],

    logLevel: config.LOG_ERROR,
    port: 9876,
    reporters: ['progress'],
    colors: true,

    autoWatch : false,
    singleRun : true,

    // For TDD mode
    autoWatch : true,
    singleRun : false,
    // /TDD

    frameworks: ['jasmine'],
    browsers: ['Chrome'],

    plugins: [
      'karma-chrome-launcher',
      'karma-jasmine'
    ]

  });
};
