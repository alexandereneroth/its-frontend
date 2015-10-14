'use strict';

/**
 * @ngdoc function
 * @name itsFrontendApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the itsFrontendApp
 */
angular.module('itsFrontendApp')
  .controller('LoginCtrl', function ($scope, $localStorage, authFactory) {

    $scope.signin = function() {
      var formData = {
        username: $scope.name,
        password: $scope.password
      };
      authFactory.signtest(formData);
    };

    $scope.token = $localStorage.token;
  });
