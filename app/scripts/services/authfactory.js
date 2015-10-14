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

    var serviceUrl = 'http://localhost:8080/its-webservice/login';

    return {
      signin: function (formData) {
        return $http.post(serviceUrl, formData);
      }
    };
  });
