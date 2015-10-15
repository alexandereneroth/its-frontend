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
  .config(function ($routeProvider, $httpProvider) {
    $routeProvider
      .when('/team/:teamId/board', {
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
    $httpProvider.interceptors.push(['$q', '$location', '$localStorage', function($q, $location, $localStorage) {
      return {
        'request': function (config) {
          config.headers = config.headers || {};
          if ($localStorage.token) {
            config.headers.Authorization = 'Bearer ' + $localStorage.token;
          }
          return config;
        },
        'responseError': function(response) {
          if(response.status === 401 || response.status === 403) {
            $location.path('/login');
          }
          return $q.reject(response);
        }
      };
    }]);
  });
