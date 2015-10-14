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
    $scope.token = $localStorage.token;
    $scope.signin = function () {
      var formData = {
        username: $scope.name,
        password: $scope.password
      };
      console.log(formData);
      authFactory.signin(formData)
        .then(function (res) {
            console.log(res);
            console.log('local storage token '+ $localStorage.token);
            window.location = '../#/board';
          },
          function (res) {
            console.log(res);
          }
        );
    };

  });
