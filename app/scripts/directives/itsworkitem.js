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
				workItem: '=model'

			}
		};
	});
