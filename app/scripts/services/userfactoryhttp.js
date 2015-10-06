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
    var serviceUrl = 'http://localhost:8080/its-webservice/teams/101/users';

    return {
      getAllUsers: function () {
        return $http.get(serviceUrl);
      }
    };

  });
