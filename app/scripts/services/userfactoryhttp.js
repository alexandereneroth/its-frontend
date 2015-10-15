'use strict';

/**
 * @ngdoc service
 * @name itsFrontendApp.userFactoryHttp
 * @description
 * # userFactoryHttp
 * Factory in the itsFrontendApp.
 */
angular.module('itsFrontendApp')
  .factory('userFactoryHttp', function ($http, $localStorage) {
    var serviceUrlBase = 'http://localhost:8080/its-webservice/';
    var usersServiceUrl = serviceUrlBase + 'users/';

    return {
      getAllUsers: function () {
        return $http.get(serviceUrlBase + 'teams/' + $localStorage.user.teamnumber + '/users/');
      },
      getAllWorkItemsByUser: function(userId){
        return $http.get(usersServiceUrl + userId + '/work-items');
      },
      removeWorkItemFromUser: function (userNumber, workItemNumber) {
        return $http.delete(usersServiceUrl + userNumber + '/work-items/' + workItemNumber);
      },
      addUserToWorkItem: function (userNumber, workItemNumber) {
        return $http.put(usersServiceUrl + userNumber + '/work-items/', workItemNumber);
      },
      getUserByUserName: function (userName){
        return $http.get(usersServiceUrl + '?username=' + userName);
      }
    };

  });
