'use strict';

/**
 * @ngdoc function
 * @name itsFrontendApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the itsFrontendApp
 */
 angular.module('itsFrontendApp')
 .controller('WorkItemCtrl', function ($scope, workItemService) {
  $scope.awesomeThings = [
  'HTML5 Boilerplate',
  'AngularJS',
  'Karma'
  ];
  $scope.workItems = workItemService.getAllWorkItems();
  $scope.workItemsOnBackLog = workItemService.getWorkItemsByStatus('ON_BACKLOG');
  $scope.workItemsInProgress = workItemService.getWorkItemsByStatus('IN_PROGRESS');
  $scope.workItemsDone = workItemService.getWorkItemsByStatus('DONE');
});

 