'use strict';

/**
 * @ngdoc function
 * @name itsFrontendApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the itsFrontendApp
 */
angular.module('itsFrontendApp')
  .controller('BoardCtrl', function ($scope, _, workItemFactoryHttp, userFactoryHttp, $timeout) {

    $scope.newWorkItem = {};

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

    function onAddWorkItemSuccess() {
      showAlertMessage(false, 'Work Item added');
      getWorkItems();
    }

    function onAddWorkItemError() {
      showAlertMessage(true, 'Error: Work Item not added');
    }

    $scope.addWorkItem = function () {
      workItemFactoryHttp.addWorkItem($scope.newWorkItem.number, $scope.newWorkItem.description)
        .then(onAddWorkItemSuccess, onAddWorkItemError);

      $scope.newWorkItem.number = '';
      $scope.newWorkItem.description = '';
    };

    function onError(res) {
      console.log('Error', res);
    }

    function getWorkItems() {
      workItemFactoryHttp.getAll()
        .then(refreshWorkItems, onError);
    }

    function refreshWorkItems(res) {
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

    $scope.removeWorkItem = function (number) {
      workItemFactoryHttp.remove(number)
        .then(getWorkItems, onError);
    };

    $scope.completeWorkItem = function (number) {
      workItemFactoryHttp.updateStatus(number, 'done')
        .then(getWorkItems, onError);
    };

    $scope.removeUserFromWorkItem = function (workItemNumber, userNumber) {
      userFactoryHttp.removeWorkItemFromUser(userNumber, workItemNumber)
        .then(function () {
          getWorkItems();
          getUsers();
        }, onError);
    };

    $scope.addUserToWorkItem = function (workItemNumber, userNumber) {
      userFactoryHttp.addUserToWorkItem(userNumber, {'number': workItemNumber} )
        .then(function () {
          getWorkItems();
          getUsers();
        }, onError);
    };

    getWorkItems();
    getUsers();
  });

