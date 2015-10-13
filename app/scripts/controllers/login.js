'use strict';

/**
 * @ngdoc function
 * @name itsFrontendApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the itsFrontendApp
 */
angular.module('itsFrontendApp')
  .controller('LoginCtrl', function ($scope, $rootScope, $localStorage, authFactory) {

    $scope.signin = function() {
      var formData = {
        username: $scope.name,
        password: $scope.password
      };

      authFactory.signin(formData, function(res) {
        if (res.type === false) {
          console.log(res.data);
          window.location = '../#/login';
        } else {
          $localStorage.token = res.data.token;
          window.location = '../#/';
        }
      }, function() {
        $rootScope.error = 'Failed to signin';
      });

    };

    $scope.token = $localStorage.token;
  });
