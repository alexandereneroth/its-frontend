'use strict';

/**
 * @ngdoc function
 * @name itsFrontendApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the itsFrontendApp
 */
angular.module('itsFrontendApp')
  .controller('WorkItemCtrl', function ($scope, workItemService, _, workItemFactoryHttp, userFactoryHttp) {

    function onError(res) {
      console.log('Error', res);
    }

    function getWorkItems() {
      workItemFactoryHttp.getAll()
        .then(function (res) {
          $scope.allWorkItems = res.data;
          $scope.workItemsOnBackLog = filterWorkItemsByStatus('ON_BACKLOG');
          $scope.workItemsInProgress = filterWorkItemsByStatus('IN_PROGRESS');
          $scope.workItemsDone = filterWorkItemsByStatus('DONE');
        }, onError);
    }

    function filterWorkItemsByStatus(status) {
      var workItemsWithStatus = [];

      for (var i = 0; i < $scope.allWorkItems.length; i++) {
        if ($scope.allWorkItems[i].status === status) {
          workItemsWithStatus.push($scope.allWorkItems[i]);
        }
      }
      return workItemsWithStatus;
    }

    function getUsers() {
      userFactoryHttp.getAllUsers()
        .then(function (res) {
          $scope.allUsers = res.data;
        }, onError);
    }

    getWorkItems();
    getUsers();
  });

