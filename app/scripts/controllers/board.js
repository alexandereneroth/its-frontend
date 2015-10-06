'use strict';

/**
 * @ngdoc function
 * @name itsFrontendApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the itsFrontendApp
 */
angular.module('itsFrontendApp')
  .controller('BoardCtrl', function ($scope, workItemService, _, workItemFactoryHttp, userFactoryHttp) {

    function onError(res) {
      console.log('Error', res);
    }

    function getWorkItems() {
      workItemFactoryHttp.getAll()
        .then(refreshWorkItems, onError);
    }

    function refreshWorkItems(res){
      $scope.allWorkItems = res.data;

      $scope.workItemsOnBackLog = filterWorkItemsByStatus('ON_BACKLOG');
      $scope.workItemsInProgress = filterWorkItemsByStatus('IN_PROGRESS');
      $scope.workItemsDone = filterWorkItemsByStatus('DONE');
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
          $scope.availableUsers = res.data;
        }, onError);
    }

    $scope.removeWorkItem = function(number){
      workItemFactoryHttp.remove(number)
        .then(getWorkItems,onError);
    };

    getWorkItems();
    getUsers();
  });

