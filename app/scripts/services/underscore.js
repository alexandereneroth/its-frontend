'use strict';

/**
 * @ngdoc service
 * @name itsFrontendApp.underscore
 * @description
 * # underscore
 * Service in the itsFrontendApp.
 */
angular.module('itsFrontendApp')
  .service('_', function () {
    return window._;
  });
