'use strict';

/**
 * @ngdoc directive
 * @name itsFrontendApp.directive:itsWorkItem
 * @description
 * # itsWorkItem
 */
angular.module('itsFrontendApp')
  .directive('itsWorkItem', function () {
    return {
      /*TODO change this URL*/
      templateUrl: 'scripts/directives/itsworkitemtmpl.html',
      restrict: 'E',
      scope: {
        workItem: '=model',
        onRemove: '&',
        onAddUser: '&',
        onRemoveUser: '&',
        onComplete: '&'
      },
      controllerAs: 'ItsWorkItemCtrl',
      controller: function ($scope, userFactoryHttp) {

        function onError(res) {
          console.log('Error', res);
        }

        function getAvailableUsers() {
          userFactoryHttp.getAllUsers()
            .then(function (res) {
              $scope.availableUsers = res.data;
              filterAvailableUsers();
            }, onError);
        }

        function filterAvailableUsers() {
          var availableUsers = $scope.availableUsers;
          var alreadyAdded = $scope.workItem.users;
          for (var i = availableUsers.length - 1; i >= 0; i--) {
            for (var j = 0; j < alreadyAdded.length; j++) {
              if ($scope.availableUsers[i]) {
              }
              if ($scope.availableUsers[i] && ($scope.availableUsers[i].firstname === alreadyAdded[j].firstname)) {
                availableUsers.splice(i, 1);
              }
            }
          }
        }

        getAvailableUsers();

        $scope.removeWorkItem = function () {
          $scope.onRemove();
        };
        $scope.addUser = function () {
          $scope.onAddUser();
        };
        $scope.removeUser = function (index) {
          var userNumber = $scope.workItem.users[index].number;
          $scope.onRemoveUser({ workItemNumber : $scope.workItem.number, userNumber: userNumber});

          if (index > -1) {
            $scope.workItem.users.splice(index, 1);
          }
        };
        $scope.markDone = function () {
          $scope.onComplete();
        };
      }
    };
  });
