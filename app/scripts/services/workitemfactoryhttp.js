'use strict';

/**
 * @ngdoc service
 * @name itsFrontendApp.workItemFactoryHttp
 * @description
 * # workItemFactoryHttp
 * Factory in the itsFrontendApp.
 */
angular.module('itsFrontendApp')
  .factory('workItemFactoryHttp', function ($http) {

    var serviceUrl = 'http://localhost:8080/its-webservice/work-items/';

    return {
      getAll: function () {

        return $http.get(serviceUrl);
      },
      get: function (number) {

        return $http.get(serviceUrl  + number);
      },
      add: function (user) {
        return $http.post(serviceUrl, user);
      },
      remove: function (number) {
        return $http.delete(serviceUrl + number);
      },
      addIssue: function (number, issue) {
        return $http.post(serviceUrl + number, issue);
      },
      updateStatus: function (number, status) {
        return $http.put(serviceUrl + number + '/status', status);
      }
    };
  });
