'use strict';

/**
 * @ngdoc service
 * @name itsFrontendApp.userFactoryHttp
 * @description
 * # userFactoryHttp
 * Factory in the itsFrontendApp.
 */
angular.module('itsFrontendApp')
  .factory('userFactoryHttp', function ($http) {
    var serviceUrlBase = 'http://localhost:8080/its-webservice/';

    var usersInTeam101ServiceUrl = serviceUrlBase + 'teams/101/users/';
    var usersServiceUrl = serviceUrlBase + 'users/';

    return {
      getAllUsers: function () {
        return $http.get(usersInTeam101ServiceUrl);
      },

      removeWorkItemFromUser: function (userNumber, workItemNumber) {
        return $http.delete(usersServiceUrl + userNumber + '/work-items/' + workItemNumber);
      }
    };

  });
