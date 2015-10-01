'use strict';

/**
 * @ngdoc function
 * @name itsFrontendApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the itsFrontendApp
 */
angular.module('itsFrontendApp')
  .controller('WorkItemCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.workItems = [{
  number: 0,
  description: 'Fix javascript autocomplete',
  status: "ON_BACKLOG",
  users: [{
    "number": 101,
    "firstname": "Betty",
    "lastname": "Miller",
    "username": "bmiller15",
    "team-number": 1
  }]
}, {
  number: 1,
  description: 'Install sublime package manager',
  status: "DONE",
  users: [{
    "number": 101,
    "firstname": "Betty",
    "lastname": "Miller",
    "username": "bmiller15",
    "team-number": 1
  }]
}, {
  number: 2,
  description: 'Fix backend server',
  status: "IN_PROGRESS",
  users: [{
    "number": 103,
    "firstname": "Bart",
    "lastname": "Aga",
    "username": "Bartaga",
    "team-number": 1
  }]
}, {
  number: 3,
  description: 'Drink tea',
  status: "IN_PROGRESS",
  users: [{
    "number": 104,
    "firstname": "Tom",
    "lastname": "Fa",
    "username": "tomasd123",
    "team-number": 1
  }]
}, {
  number: 4,
  description: 'Fight a dragon',
  status: "ON_BACKLOG",
  users: [{
    "number": 105,
    "firstname": "Klark",
    "lastname": "Do",
    "username": "klark123",
    "team-number": 1
}];
  });
