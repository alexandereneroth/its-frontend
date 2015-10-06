'use strict';

/**
 * @ngdoc function
 * @name itsFrontendApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the itsFrontendApp
 */
angular.module('itsFrontendApp')
  .controller('WorkItemCtrl', function ($scope, workItemService, _, workItemFactoryHttp) {

    function onError(res) {
      console.log('Error', res);
    }

    function getWorkItems() {
      workItemFactoryHttp.getAll()
        .then(refreshWorkItems, onError);
    }

    function refreshWorkItems(res){
      $scope.workItems = res.data;

      $scope.workItemsOnBackLog = filterWorkItemsByStatus('ON_BACKLOG');
      $scope.workItemsInProgress = filterWorkItemsByStatus('IN_PROGRESS');
      $scope.workItemsDone = filterWorkItemsByStatus('DONE');
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

    getWorkItems();

    $scope.removeWorkItem = function(number){
      workItemFactoryHttp.remove(number)
        .then(getWorkItems,onError);
    };

    /*function getworkItemByNumber(number) {
     for (var i = 0; i < tempWorkItems.length; i++) {
     if (tempWorkItems[i].number === parseInt(number)) {
     return tempWorkItems[number];
     }
     }
     return null;
     }*/

    /*$scope.removeUser = function (user, workItem) {
     var workItemByNR = getworkItemByNumber(workItem.number);
     workItemByNR.users.splice(users.indexOf(user), 1);
     };
     $scope.addUser = function (user, workItem) {
     var workItemByNR = getworkItemByNumber(workItem.number);
     workItemByNR.users.push(user);
     //workItem.addUser(user, workItem);
     };
     $scope.usersToSelectList = function (workItem) {
     var myArr = workItemService.getAllUsersToSelect(workItem.users);
     return myArr;
     };*/
  });

