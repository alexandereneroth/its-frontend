'use strict';

/**
 * @ngdoc function
 * @name itsFrontendApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the itsFrontendApp
 */
angular.module('itsFrontendApp')
  .controller('BoardCtrl', function ($scope, _,$location, workItemFactoryHttp, userFactoryHttp, $timeout, $localStorage, $routeParams) {

    $scope.token = $localStorage.token;
    if($routeParams.teamId !== $localStorage.user.teamnumber+ ''){
      window.location = '../#/login';
    }
    if($localStorage.token === null){
      window.location = '../#/login';
    }
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
      getWorkItems($localStorage.user.teamnumber);
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

    function onError() {
    }

    function getWorkItems(teamNr) {
    workItemFactoryHttp.getAllFromTeam(teamNr).then(refreshWorkItems, onError);
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
        .then(getWorkItems($localStorage.user.teamnumber), onError);
    };

    $scope.completeWorkItem = function (number) {
      workItemFactoryHttp.updateStatus(number, 'done')
        .then(getWorkItems($localStorage.user.teamnumber), onError);
    };

    $scope.moveWorkItemToColumn = function (workItemNumber, status, direction) {
      var newStatus;
      if (status === 'ON_BACKLOG') {
        newStatus = 'IN_PROGRESS';
      } else if (status === 'IN_PROGRESS') {
        if (direction === 'left') {
          newStatus = 'ON_BACKLOG';
        } else { /*direction === 'right'*/
          newStatus = 'DONE';
        }
      } else { /*status === 'DONE'*/
        newStatus = 'IN_PROGRESS';
      }
      workItemFactoryHttp.updateStatus(workItemNumber, newStatus)
        .then(getWorkItems($localStorage.user.teamnumber), onError);
    };

    $scope.removeUserFromWorkItem = function (workItemNumber, userNumber) {
      userFactoryHttp.removeWorkItemFromUser(userNumber, workItemNumber)
        .then(function () {
          getWorkItems($localStorage.user.teamnumber);
          getUsers();
        }, onError);
    };

    $scope.addUserToWorkItem = function (workItem, userNumber) {

      userFactoryHttp.addUserToWorkItem(userNumber, {'number': workItem.number})
        .then(function () {
          if (workItem.status === 'ON_BACKLOG') {
            workItemFactoryHttp.updateStatus(workItem.number, 'IN_PROGRESS')
              .then(function () {
                getWorkItems($localStorage.user.teamnumber);
                getUsers();
              });
          } else {
            getWorkItems($localStorage.user.teamnumber);
            getUsers();
          }
        }, onError);
    };

    getWorkItems($localStorage.user.teamnumber);
    getUsers();
  });

