'use strict';

/**
 * @ngdoc function
 * @name itsFrontendApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the itsFrontendApp
 */
angular.module('itsFrontendApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
