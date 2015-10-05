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
        .then(function (res) {
          $scope.workItems = res.data;
        }, onError);
    }

    getWorkItems();

    var tempWorkItems = workItemService.getAllWorkItems();
    $scope.workItems = tempWorkItems;
    $scope.workItemsOnBackLog = workItemService.getWorkItemsByStatus('ON_BACKLOG');
    $scope.workItemsInProgress = workItemService.getWorkItemsByStatus('IN_PROGRESS');
    $scope.workItemsDone = workItemService.getWorkItemsByStatus('DONE');

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

