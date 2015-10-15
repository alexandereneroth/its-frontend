'use strict';

/**
 * @ngdoc function
 * @name itsFrontendApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the itsFrontendApp
 */
angular.module('itsFrontendApp')
  .controller('LoginCtrl', function ($scope, $localStorage, authFactory, $timeout) {
    $scope.token = $localStorage.token;
    var showAlertMessage = function (isError, message) {
      //reset
      $scope.showAlert = false;
      $scope.doAlertFade = false;

      $scope.alertType = isError ? 'alert-danger' : 'alert-success';
      $scope.alertMessage = message;
      $scope.showAlert = true;

      $timeout(function () {
        $scope.doAlertFade = true;
      }, 2500);
    };
    $scope.signin = function () {
      var formData = {
        username: $scope.name,
        password: $scope.password
      };
      console.log(formData);
      authFactory.signin(formData)
        .then(function (res) {
            $localStorage.token = res.data.value;
            console.log(res);
            console.log('local storage token '+ $localStorage.token);
            window.location = '../#/team/' + 5 +'/board';
          },
          function (res) {
            console.log('error '+ res);
            $scope.name = '';
            $scope.password = '';
            if(res.status === 401){
              showAlertMessage(false, 'wrong username or password');
            }else{
              showAlertMessage(false, 'the user is already logged on');
            }
          }
        );
    };

  });
