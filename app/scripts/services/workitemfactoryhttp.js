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

    var serviceUrl = 'http://localhost:8080/its-webservice/';
    var workitemServiceUrl = serviceUrl + 'work-items/';
    var teamServiceUrl = serviceUrl + 'teams/';
    return {
      getAll: function () {
        return $http.get(workitemServiceUrl);
      },
      get: function (number) {
        return $http.get(workitemServiceUrl  + number);
      },
      getAllFromTeam: function(teamNumber){
        return $http.get(teamServiceUrl + teamNumber + '/work-items');
      },
      add: function (user) {
        return $http.post(workitemServiceUrl, user);
      },
      remove: function (number) {
        return $http.delete(workitemServiceUrl + number);
      },
      addIssue: function (number, issue) {
        return $http.post(workitemServiceUrl + number, issue);
      },
      updateStatus: function (number, status) {
        return $http.put(workitemServiceUrl + number + '/status', status);
      },
      addWorkItem: function (number, description) {
        var newWorkItem = {};
        newWorkItem.number = number;
        newWorkItem.description = description;
        newWorkItem.status = 'ON_BACKLOG';
        newWorkItem.users = null;
        newWorkItem.issue = null;
        return $http.post(serviceUrl, newWorkItem);
      }
    };
  });
