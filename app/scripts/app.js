'use strict';

/**
 * @ngdoc overview
 * @name itsFrontendApp
 * @description
 * # itsFrontendApp
 *
 * Main module of the application.
 */
angular
  .module('itsFrontendApp',[
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '../views/board.html',
        controller: 'BoardCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
