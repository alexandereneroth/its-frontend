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

    $scope.signin = function () {
      var formData = {
        username: $scope.name,
        password: $scope.password
      };
      console.log(formData);
      authFactory.signin(formData)
        .then(function (res) {
            console.log(res);
          },
          function (res) {
            console.log(res);
          }
        );

    };

    $scope.token = $localStorage.token;
  });
