'use strict';

/**
 * @ngdoc service
 * @name itsFrontendApp.authFactory
 * @description
 * # authFactory
 * Factory in the itsFrontendApp.
 */
angular.module('itsFrontendApp')
  .factory('authFactory', function ($http) {

    var serviceUrlBase = 'http://localhost:8080/its-webservice/login';

    return {
      signin: function(data, success, error) {
        $http.post(serviceUrlBase, data).success(success).error(error);
      }
    };
  });
