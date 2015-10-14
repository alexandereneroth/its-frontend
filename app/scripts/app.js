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
    'ngRoute','ngStorage'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'login'
      })
      .when('/board', {
        templateUrl: '../views/board.html',
        controller: 'BoardCtrl'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'login'
      })
      .otherwise({
        redirectTo: '/login'
      });

  });
