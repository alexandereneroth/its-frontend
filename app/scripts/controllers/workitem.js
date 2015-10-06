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
    $scope.usersToAdd = [];
    function getWorkItems() {
      workItemFactoryHttp.getAll()
        .then(function (res) {
          $scope.workItems = res.data;
          $scope.workItemsOnBackLog = filterWorkItemsByStatus('ON_BACKLOG');
          $scope.workItemsInProgress = filterWorkItemsByStatus('IN_PROGRESS');
          $scope.workItemsDone = filterWorkItemsByStatus('DONE');
        }, onError);
    }

    function filterWorkItemsByStatus(status) {
      var workItemsWithStatus = [];

      for (var i = 0; i < $scope.workItems.length; i++) {
        if ($scope.workItems[i].status === status) {
          workItemsWithStatus.push($scope.workItems[i]);
        }
      }
      return workItemsWithStatus;
    }
    function getAllUsers() {
      userFactoryHttp.getAllUsers()
        .then(function (res) {
          $scope.allUsers = res.data;
        }, onError);
    }
    getWorkItems();
    getAllUsers();

    $scope.setUsersToSelectList = function(workItem){
      var toRemove = workItem.users
      var usersToSelect = $scope.allUsers;
      console.log('workItem desc is ' + workItem.description);
      console.log('workItem arr before length is ' + toRemove.length);
        for( var i=$scope.allUsers.length - 1; i>=0; i--){
        for( var j=0; j<toRemove.length; j++){
          if($scope.allUsers[i]){
          }
          if($scope.allUsers[i] && ($scope.allUsers[i].firstname === toRemove[j].firstname)){
            usersToSelect.splice(i, 1);
          }
        }
      }
      console.log('my array in workItem is ' + usersToSelect.length);
      console.log('allUsers array is ' + $scope.allUsers.length);
      console.log('workItem arr length is ' + toRemove.length);
      $scope.usersToAdd = usersToSelect;
    };
  });

