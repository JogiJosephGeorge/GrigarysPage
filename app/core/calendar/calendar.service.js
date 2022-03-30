'use strict';

angular.
  module('core.calendar').
  factory('Phone', ['$resource',
    function($resource) {
      return $resource('calendar/:phoneId.json', {}, {
        query: {
          method: 'GET',
          params: {phoneId: 'phones'},
          isArray: true
        }
      });
    }
  ]);
