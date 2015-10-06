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

    var serviceUrl = 'http://192.168.68.41/its-webservice/work-items';

    return {
      getAll: function () {

        return $http.get(serviceUrl);
      },
      get: function (id) {

        return $http.get(serviceUrl + '/' + id);
      },
      add: function (user) {
        return $http.post(serviceUrl, user);
      },
      remove: function (id) {
        return $http.delete(serviceUrl + '/' + id);
      },
      addIssue: function (id, issue) {
        return $http.post(serviceUrl + '/' + id, issue);
      },
      updateStatus: function (id, status) {
        return $http.put(serviceUrl + '/' + id + '/status', status);
      }
    };
  });
