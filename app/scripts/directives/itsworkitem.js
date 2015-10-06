'use strict';

/**
 * @ngdoc directive
 * @name itsFrontendApp.directive:itsWorkItem
 * @description
 * # itsWorkItem
 */
angular.module('itsFrontendApp')
	.directive('itsWorkItem', function () {
		return { /*TODO change this URL*/
			templateUrl: 'scripts/directives/itsworkitemtmpl.html',
			restrict: 'E',
			scope: {
				workItem: '=model',
        onRemove: '=',
        onAddUser: '&',
        onRemoveUser: '&',
        allUsersToAdd: '=',
        allUsers: '='
			},
      controller: function($scope){
        $scope.removeWorkItem = function(){
          $scope.onRemove();
        };
        $scope.addUser = function(){
          $scope.onAddUser();
        };
        $scope.removeUser = function(){
          $scope.onRemoveUser();
        };
        $scope.getUsersToAdd = function () {
          var alreadyAdded = $scope.workItem.users;
          var usersToAdd = angular.copy($scope.allUsers);
          for (var i = usersToAdd.length - 1; i >= 0; i--) {
            for (var j = 0; j < alreadyAdded.length; j++) {
              if ($scope.allUsers[i]) {
              }
              if ($scope.allUsers[i] && ($scope.allUsers[i].firstname === alreadyAdded[j].firstname)) {
                usersToAdd.splice(i, 1);
              }
            }
          }
          return usersToAdd;
        };
      },
      controllerAs: 'ItsWorkItemCtrl'
		};
	});
