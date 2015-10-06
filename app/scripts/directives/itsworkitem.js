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
        onRemove: '&',
        onAddUser: '=',
        onRemoveUser: '=',
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
      },
      controllerAs: 'ItsWorkItemCtrl'
		};
	});
