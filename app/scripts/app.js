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
  .module('itsFrontendApp', [
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
